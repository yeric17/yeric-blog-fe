<script context="module">
    import {API_HOST} from '$stores/config';

    export const load = async ({params}) => {
        return {
            status: 302,
            redirect: "/"
        }
        const comment_id = params.comment_id;

        const [responseParent,responseComments] = await Promise.allSettled([
            fetch(`${API_HOST}/comments/id/${comment_id}`),
            fetch(`${API_HOST}/comments?entity_type=comment&parent_id=${comment_id}`)
        ])

        let comments = []
        let parent = null

        if(responseComments.status === 'fulfilled'){
            const commentsJSON = await responseComments.value.json();
            comments = commentsJSON.data || [];
        }
        
        if(responseParent.status === 'fulfilled'){
            const parentJSON = await responseParent.value.json();
            
            parent = parentJSON.data;
        }

        console.log(parent)

        return {
            props: {
                comment_id,
                comments,
                parent
            },
        };
    };
</script>
<script>
    import {user} from "$stores/user";
    import CommentBlog from "$components/CommentBlog.svelte";
    import {onMount} from "svelte";


    export let comments = [];
    export let parent = null;
    export let comment_id = null;


</script>

<section class="comments">
    <CommentBlog 
        data={{
            comment_id: parent?.id,
            name: parent?.author.name,
            avatar: parent?.author.picture,
            post_id: parent?.post_id,
            parent_id: comment_id,
            content: parent?.content,
            date: parent?.created_at,
            likes: parent?.likes,
            comments: parent?.comments.count,
            link_comments: parent?.comments.link
    }}
    userId={$user.id}
    mainComment={true}/>
    {#each comments as comment}
    <CommentBlog 
        data={{
            comment_id: comment.id,
            name: comment.author.name,
            avatar: comment.author.picture,
            parent_id: comment.id,
            post_id: comment.post_id,
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
