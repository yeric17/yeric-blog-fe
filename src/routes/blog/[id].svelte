<script context="module">
    import {Auth} from "$stores/user";
    export const load = async ({params}) => {
        let isAuth = await Auth();
        const id = params.id;
        return {
            props: {
               id,
               authenticated: isAuth
            },
        };
    };
</script>
<script>
    import {onMount} from 'svelte';
    import {user} from '$stores/user';
    import moment from 'moment';
    import 'moment/locale/pt-br';
    import {DateFormat} from "$lib/utils";

    import UserAvatar from '$components/UserAvatar.svelte';
    import Interaction from '$components/Interaction.svelte';
    import CommentBlog from '$components/CommentBlog.svelte';


    export let id


    let blogPromise = Promise.resolve()
    let commentsPromise = Promise.resolve()
    let post = null;
    let comments = [];
    onMount(() => {
        blogPromise = fetch(`http://localhost:7070/posts/id/${id}`)
            .then(res => res.json())
            .then(blog => {
                post = blog.data;
                post.content = JSON.parse(post.content);
                console.log(post)
        })
        commentsPromise = fetch(`http://localhost:7070/comments?entity_type=post&post_id=${id}`)
            .then(res => res.json())
            .then(json => {
                comments = json.data;
                console.log(comments)
            })
    })
</script>

<svelte:head>
    <title>Blog Post</title>
</svelte:head>
<main class="post-page">
{#await blogPromise}
Loading...
{:then _}
    <section class="post-page_content">
        <div class="post-page_header">
            <h1 class="post-page_title">{post.title}</h1>
            <span class="post-page_date">{DateFormat(post.created_at,'es',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</span>
            <div class="post-page_info">            
                <div class="post-page_author">
                    <UserAvatar userName={post.author.name} userAvatar={post.author.picture} />
                </div>
                <div class="post-page_interaction">            
                    <Interaction data={{
                        name: $user?.name,
                        post_id: post.id,
                        user_id: $user?.id,
                        entity_type: 'post',
                        likes: post.likes,
                        comments: post.comments.count,
                    }}>
                    </Interaction>
                </div>
            </div>
        </div>
        {#each post.content as part}
            {#if part.type === 'text'}
                <p class="post-page_text">{part.value}</p>
            {/if}
            {#if part.type === 'image'}
                <div class="post-page_image-container">
                    <img class="post-page_image" src={part.value} alt="postimage" />
                </div>
            {/if}
            {#if part.type === 'subtitle'}
                <h2 class="post-page_subtitle">{part.value}</h2>
            {/if}
        {/each}
    </section>
    {#if comments?.length > 0}
    <section class="post-page_comments">
        <h2 class="post-page_comments-title">Comentarios</h2>
        <div class="post-page_comments-wrapper">
        {#await commentsPromise}
        Loading...
        {:then _}
            {#each comments as comment}
                <div class="post-page_comment">
                    <CommentBlog data={{
                        comment_id: comment.id,
                        post_id: post.id,
                        name: comment.author.name,
                        avatar: comment.author.picture,
                        content: comment.content,
                        date: comment.created_at,
                        likes: comment.likes,
                        comments: comment.comments.count,
                        link_comments: comment.comments.link
                    }}
                    userId={$user.id} />
                </div>
            {/each}
        {/await}
        </div>
    </section>
    {/if}
{/await}
</main>

<style>
    .post-page {
        width: 100%;
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
        padding-top: var(--spacing-md);
        background-color: var(--color-white);
    }

    .post-page_content {
        width: 100%;
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-xxl);
        
        padding-bottom: var(--spacing-xl);
        padding-top: var(--spacing-xl);
        padding-left: var(--spacing-md);
        padding-right: var(--spacing-md);
        border-radius: 5px;
    }
    .post-page_header {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "title"
                            "date"
                            "info";
        gap: var(--spacing-md);
    }
    .post-page_title {
        font-size: var(--font-size-xxl);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-md);
        color: var(--color-secondary);
        text-align: center;
        grid-area: title;
    }
    .post-page_date {
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-light);
        color: var(--color-secondary);
        text-align: center;
        grid-area: date;
    }
    .post-page_info {
        grid-area: info;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--color-gray-light);
        padding-top: var(--spacing-md);
    }

    .post-page_text {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-regular);
        margin-bottom: var(--spacing-md);
        color: var(--color-gray-dark);
    }
    .post-page_image-container {
        width: 100%;
        max-width: 80%;
        max-height: 300px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .post-page_image {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    .post-page_comments{
        padding-top: var(--spacing-xxl);
        padding-bottom: var(--spacing-xxl);
        width: 100%;
        max-width: var(--max-width);
        margin: 0 auto;
        border-top: 1px solid var(--color-gray-light);
    }
    .post-page_comments-wrapper{
        border-radius: 5px;
        overflow: hidden;
    }
    .post-page_comments-title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-bold);
        padding-bottom: var(--spacing-xxl);
        padding-top: var(--spacing-md);
        padding-left : var(--spacing-md);
        color: var(--color-secondary-dark);
        width: 100%;
    }
</style>