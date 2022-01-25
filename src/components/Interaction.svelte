
<script>
	import { createEventDispatcher } from 'svelte';
    import {addLike} from '$stores/posts';
    import {addNotification} from '$stores/notifications';
    import {session} from '$app/stores';
    import Comment from '$components/Comment.svelte';
	const dispatch = createEventDispatcher();

    export let data = {
        post_id: null,
        parent_id: null,
        comment_id : null,
        entity_type: 'post',
        likes: null,
        comments: 0,
    };
    export let activeLikes = false;


    let likeCount = 0;
    let isCommenting = false;
    async function handleLikes(e){
        e.preventDefault();
        e.stopPropagation();
        
        let like = {
            author_id: $session.user.id,
            entity_id: data.entity_type == 'post' ? data.post_id : data.comment_id,
            entity_type: data.entity_type,
        }

        let confirm = await addLike(like);

        if(confirm){
            dispatch('like', data);
            data.likes = [...data.likes, like];
            likeCount = data.likes.length;
            console.log(like)
        }
    }

    function handleComments(e){
        e.preventDefault();
        e.stopPropagation();
        dispatch('comment', data);
        isCommenting = !isCommenting;
    }

    function handleSuccess(){
        isCommenting = false;
        data.comments++;
        dispatch('success-comment', data);
    }

    function LikeMe(){
        if(!data.likes) return false
        return data.likes.find(like => like.author_id == data.user_id)
    }
    
</script>

<div class="interaction{LikeMe()?' like-me':''}">
    <span class="interaction_comments" on:click={handleComments}>
        <span class="icon-message-square"></span>
        <span class="interaction_comments_count">{data.comments > 0?data.comments:''}</span>
    </span>
    {#if activeLikes}
    <span class="interaction_likes" on:click={handleLikes}>
        <span class="icon-like">
        </span>
        <span class="interaction_likes_count">{data.likes?.length > 0?data.likes.length:''}</span>
    </span>
    {/if}
    {#if isCommenting}
        <Comment 
        on:cancel={()=>isCommenting = false} 
        on:submit={()=>isCommenting = false}
        on:success={handleSuccess}
        data={{
            name: $session.user.name,
            author_id: $session.user.id,
            post_id: data.post_id,
            parent_id: data.parent_id,
            comment_id: data.comment_id,
            entity_type: data.entity_type,
        }} />
    {/if}
</div>

<style>
    .interaction{
        display: flex;
        justify-self: end;
        height: var(--font-size-lg);
        position: relative;
        z-index: var(--z-index-lv2);
    }
    [class*="interaction_"]{
        font-size: var(--font-size-lg);
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    [class*="icon-"]{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .interaction_comments {
        color: var(--color-secondary);
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .interaction_comments:hover {
        color: var(--color-primary);
    }
    .interaction_likes {
        color: var(--color-secondary);
    }
    .interaction_likes:hover {
        color: var(--color-primary);
    }
    .interaction_likes_count{
        padding-left: var(--spacing-sm);
    }
    .interaction_comments_count{
        padding-left: var(--spacing-sm);
    }
    .interaction.like-me .interaction_likes{
        color: var(--color-primary);
    }
    .icon-like{
        pointer-events: none;
    }

</style>