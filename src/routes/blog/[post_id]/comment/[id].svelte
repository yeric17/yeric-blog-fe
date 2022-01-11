<script context="module">
    export const load = async ({params,url}) => {
        const comment_id = params.id;
        const post_id = params.post_id;
        return {
            props: {
                comment_id,
                post_id
            },
        };
    };
</script>
<script>
    import {user} from "$stores/user";
    import CommentBlog from "$components/CommentBlog.svelte";
    import {onMount} from "svelte";

    export let comment_id = "";

    export let post_id = "";

    let comments = [];
    let parentComment = null;

    onMount(async function(){
        let parentResp = await fetch(`http://localhost:7070/comments/id/${comment_id}`);
        let parentJson = await parentResp.json();
        console.log(parentJson);
        parentComment = parentJson.data;

        let response = await fetch(`http://localhost:7070/comments?entity_type=comment&post_id=${post_id}&comment_id=${comment_id}`);
        let data = await response.json();

        comments = data.data;
    })
</script>

<section class="comments">
    <CommentBlog 
        data={{
            comment_id: parentComment?.id,
            post_id: post_id,
            name: parentComment?.author.name,
            avatar: parentComment?.author.picture,
            content: parentComment?.content,
            date: parentComment?.created_at,
            likes: parentComment?.likes,
            comments: parentComment?.comments.count,
            link_comments: parentComment?.comments.link
    }}
    userId={$user.id}
    mainComment={true}/>
    {#each comments as comment}
    <CommentBlog 
        data={{
            comment_id: comment.id,
            post_id: post_id,
            name: comment.author.name,
            avatar: comment.author.picture,
            content: comment.content,
            date: comment.created_at,
            likes: comment.likes,
            comments: comment.comments.count,
            link_comments: comment.comments.link
    }}
    userId={$user.id}
    />
    {/each}
</section>

<style>
    .comments {
        max-width: var(--max-width);
        margin: 0 auto;
    }
</style>
