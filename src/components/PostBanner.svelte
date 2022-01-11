
<script>
    import UserAvatar from './UserAvatar.svelte';
    import Interaction from './Interaction.svelte';
    import {addLike} from '$stores/posts';
    import moment from 'moment';
    import Comment from '$components/Comment.svelte';
    import {user} from '$stores/user';
    import {DateFormat} from "$lib/utils";

    export let post = {
        id : '',
        title: '',
        content: [],
        resume: '',
        image: 'https://joshcollinsworth.com/images/post_images/introducing_svelte.png',
        author: {
            id: '',
            name: '',
            picture: ''
        },
        comments: 0,
        likes: null,
        created_at: ''
    };
    export let likeMe = false;
    $: linkPost = '/blog/' + post.id;
    
    function goLink(){
        console.log(linkPost);
        window.location.href = linkPost;
    }

</script>


<article class="post-banner">
    <div class="post-banner_image" on:click={goLink}>
        <img src="{post.image}" alt="imagen del post" />
    </div>
    <div class="post-banner_content">
        <h4 class="post-banner_title" on:click={goLink}>{post.title}</h4>
        <span class="post_date">
            {DateFormat(post.created_at,'es',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </span>
        <p class="post-banner_text">
            {post.resume}
        </p>
        <a sveltekit:prefetch href="{linkPost}" class="post-banner_link">Leer más</a>
    </div>
    <div class="post-banner_footer">
        <div class="footer_author">
            <UserAvatar userName="{post.author.name}"  userAvatar={post.author.picture}></UserAvatar>
        </div>
        <div class="footer_interactions">
            <Interaction likeMe={likeMe} data={{
                name: $user.name,
                post_id: post.id,
                comment_id: null,
                user_id: $user.authenticated ? $user.id : null,
                likes : post.likes,
                comments : post.comments.count,
                entity_type: 'post'
            }}></Interaction>
        </div>
    </div>
</article>



<style>
    .post-banner {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "image"
            "content"
            "footer";
        gap: var(--spacing-md);
        box-shadow: var(--shadow-lv3);
        max-width: var(--max-width);
        border: 1px solid var(--color-primary-light);
        border-radius: var(--border-radius-lg);
        background-color: var(--color-white);
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 0;
        
        
    }


    .post-banner:hover {
        box-shadow: var(--shadow-lv4);
    }
    .post-banner:hover::after {
        opacity: 1;
    }
    .post-banner_image {
        border-radius: var(--border-radius-lg);
        grid-area: image;
        position: relative;
    }
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
    .post-banner_image  img {
        width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: var(--border-radius-lg);
    }

    .post-banner_content {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        grid-area: content;
    }

    .post-banner_title {
        font-size: var(--font-size-xxl);
        font-weight: var(--font-weight-bold);
        color: var(--color-primary-dark);
    }

    .post-banner_text {
        font-size: var(--font-size-md);
        color: var(--color-secondary);
    }

    .post-banner_link {
        font-size: var(--font-size-md);
        color: var(--color-primary-dark);
        text-decoration: none;
    }

    .post-banner_footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        align-items: end;
        justify-items: end;
        grid-area: footer;
    }

    .footer_author{
        justify-self: start;
    }

    .post_date{
        align-self: flex-end;
    }

    @media (min-width: 768px) {
        .post-banner {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                "image content"
                "image content"
                "image footer";
        }
    }

</style>