<script>
    import {slide} from 'svelte/transition';
    import {goto} from "$app/navigation"
    import Interaction from './Interaction.svelte';
    import {user} from '$stores/user';
    import CommentBlog from './CommentBlog.svelte';

    export let data = {
        post_id: '',
        comment_id: '',
        name: '',
        avatar: '',
        content: '',
        date: '1',
        likes: 0,
        comments: 0,
        link_comments: null,
    }

    export let userId = null;
    export let mainComment = false;

    let comments = [];

    let showChilds = false;

    export let isChild = false;
    export let lastChild = false;
    let includeChilds = false;
    $: hasChilds = data.comments > 0 || includeChilds;

    let childCommentsPromise = Promise.resolve();

    function getChildComments(){
        if (showChilds){
            showChilds = false;
            return
        }
        childCommentsPromise = fetch(data.link_comments)
                            .then(response => response.json())
                            .then(json => {
                                comments = json.data;
                                showChilds = true;
                                console.log(comments);
                                return comments;
                            })
    }

    function handleCommentSuccess(){
        includeChilds = true;
    }
    function handleComment(event){
        goto(`/blog/${data.post_id}/comment/${data.comment_id}`);
    }
</script>


<article class:mainComment class="comment{data.link_comments && data.link_comments !== ''?' has-childs':''}{isChild?' child-comment':''}" transition:slide={{duration:300}} on:click|preventDefault={(event)=>{

    if(hasChilds){
        handleComment(event);
    }
}}>
    <div class="comment-avatar_container">
        <div class="comment_avatar">
            <img src={data.avatar} alt="{data.name}">
        </div>
        {#if hasChilds || (isChild && !lastChild)}
            <div class="comment-line">
            </div>
        {/if}
    </div>
    <div class="comment_user-info">
        <span class="user-name">{data.name}</span>
        <span class="comment-date">{moment(data.date).format("DD/MM/YYYY - HH:mm")}</span>
    </div>
    <div class="comment-body">
        <p>{data.content}</p>
    </div>
    <div class="comment-footer">
        {#if data.link_comments && data.link_comments !== ''}
            <div class="comment-link{showChilds?' show-childs':''}" on:click={getChildComments}>
                <span class="icon-arrow-down"></span>
            </div>
        {/if}
        <Interaction data={{
            name: $user?.name,
            post_id: data.post_id,
            comment_id: data.comment_id,
            user_id: userId,
            entity_type: 'comment',
            likes: data.likes,
            comments: data.comments,
        }}
        on:comment-success={handleCommentSuccess}/>
    </div>
</article>
    
{#if showChilds}
    {#each comments as comment, index}
        <CommentBlog data={{
            post_id: data.post_id,
            comment_id: comment.id,
            name: comment.author.name,
            avatar: comment.author.picture,
            content: comment.content,
            date: comment.date,
            likes: comment.likes?.length,
            comments: comment.comments.count,
            link_comments: comment.comments.link,
        }}
        isChild={true}
        lastChild={index === comments.length - 1}/>
    {/each}
{/if}

<style>
    .comment{
        --color-avatar: var(--color-primary);
        --border-color: var(--color-gray-light);
        background-color: #fff;
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-areas: "avatar name"
                            "avatar body"
                            "avatar footer";
        justify-items: start;
        border-bottom: 1px solid var(--border-color);
    }
    .comment.has-childs{
        cursor: pointer;
    }
    .comment.has-childs:hover{
        background-color: #f5f5f5;
    }
    .comment.mainComment{
        min-height: 200px;
        font-size: 1.2rem;
        --border-color: var(--color-secondary-light);
    } 
    .comment-avatar_container{
        grid-area: avatar;
        display: grid;
        grid-template-columns: 5rem;
        grid-template-rows: auto 1fr;
        justify-items: center;
    }
    .comment_avatar{
        width: 100%;
        height: 100%;
        color: var(--color-white);
        display: flex;
        justify-content: center;
        justify-self: center;
        align-self: center;
        padding: var(--spacing-sm) var(--spacing-md);
        padding-bottom: 0;
        position: relative;
        
    }
    .comment_avatar img{
        background-color: var(--color-white);
        border: 2px solid transparent;
        width: 3rem;
        height: 3rem;
        display: block;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 1.5px 0 1px rgba(0, 0, 0, 0.2), 
                    0 1.5px 0 1px var(--color-avatar),
                    inset 0 1.5px 0 1px rgba(255, 255, 255, 1),
                    0 5px 2px 1px rgba(0, 0, 0, 0.2);
        position: relative;
        z-index: 1;
        flex-grow: 0;
    }
    .comment-line{
        flex-grow: 1;
        height: 100%;
        background-color: var(--color-avatar);
        width: 2px;
        border-top-left-radius: 1px;
        border-top-right-radius: 1px;
    }
    .comment_user-info{
        
        padding: var(--spacing-sm) var(--spacing-md);
        grid-area: name;
        align-self: start;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: var(--spacing-lg);
    }
    .user-name{
        font-size: 1.1em;
        color: var(--color-avatar);
    }
    .comment-date{
        font-size: 1em;
        color: var(--color-secondary-light);
    }
    .comment-body{
        padding: var(--spacing-sm) var(--spacing-md);
        grid-area: body;
    }
    .comment-footer{
        padding: var(--spacing-sm) var(--spacing-md);
        display: flex;
        justify-self: end;
        grid-area: footer;
        
    }
    .comment-link{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;

    }
    .comment-link:last-of-type{
        width: 0;    
    }
    .comment-link span{
        font-size: 1.2em;
        color: var(--color-secondary);
        font-weight: 600;
        pointer-events: none;
    }
    .show-childs{
        transform: translateX(-50%) rotate(180deg);
    }
    
    .child-comment .user-name{
        --color-avatar: var(--color-secondary);
    }

    .child-comment .comment-avatar_container .comment_avatar::before{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 1rem;
        background-color: var(--color-avatar);
    }
    .child-comment .comment-avatar_container img{
        width: 2.5rem;
        height: 2.5rem;
    }
    p{
        margin: 0;
    }
</style>