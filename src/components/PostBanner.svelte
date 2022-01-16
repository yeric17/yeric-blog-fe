
<script>
    import UserAvatar from './UserAvatar.svelte';
    import Interaction from './Interaction.svelte';
    import {addLike} from '$stores/posts';
    import Comment from '$components/Comment.svelte';
    import {user} from '$stores/user';
    import {DateFormat} from "$lib/utils";
    import Button from '$components/Button.svelte';
    import {API_HOST} from '$stores/config';

    export let post = {
        id : '',
        title: '',
        content: [],
        resume: '',
        image: `${API_HOST}/images/svelte.png`,
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
    <div class="post-banner_image" on:click={goLink} style={`--banner-image: url(${API_HOST}/images/svelte.png);`}>
        
    </div>
    <div class="post-banner_content">
        <h4 class="post-banner_title"><a href="/blog/{post.id}">{post.title}</a></h4>
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
        <div class="btn-wrapper">
            <Button btnType="primary-variant" on:click={goLink}>Leer más</Button>
        </div>
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
        gap: var(--spacing-lg);
        max-width: var(--max-width);
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 0;
        
    }
    .post-banner_image {
        --banner-image: url('{post.image}');
        grid-area: image;
        position: relative;
        background-image: var(--banner-image);
        background-size: cover;
        background-position: center;
        min-height: 250px;
    }


    .post-banner_content {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
        padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
        grid-area: content;
    }

    .post-banner_title {
        font-family: var(--font-secondary);
        font-size: var(--font-size-xxl);
        padding-top: var(--spacing-lg);
        font-weight: 600;
        color: #514451;
    }
    .post-banner_title:hover {
        color: var(--color-secondary);
    }
    .post-banner_text {
        font-size: var(--font-size-md);
        color: var(--color-secondary);
    }

    .btn-wrapper{
        width: 180px;
        margin: auto;
    }

    .post-banner_footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-md);
        padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
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
            --font-size-xxl: 48px;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                "image content"
                "image content"
                "image footer";
        }
    }

</style>