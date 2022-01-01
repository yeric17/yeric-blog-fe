<script>
    import UserAvatar from './UserAvatar.svelte';
    import Interaction from './Interaction.svelte';
    import {user} from '$stores/user';

    
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

    export let userId = null;

    export let likeMe = false;

</script>

<article class="post-card">
    <span class="post-card_image">
        <img src="{post.image}" alt="">
    </span>
    <h3 class="post-card_title">{post.title}</h3>
    <p class="post-card_content">{post.resume}</p>
    <a sveltekit:prefetch class="post-card_link" href="/blog/{post.id}">Leer más</a>
    <div class="post-card_footer">
        <UserAvatar userName={post.author.name} userAvatar={post.author.picture}/>
        <Interaction likeMe={likeMe} data={{
            name: $user.name,
            post_id: post.id,
            comment_id: null,
            user_id: userId,
            likes: post.likes,
            comments: post.comments.count,
            entity_type: 'post'
        }}/>
    </div>
</article>

<style>
    .post-card{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: #fff;
        gap: var(--spacing-md);
        box-shadow: var(--shadow-lv2);
        padding: var(--spacing-md);
    }
    .post-card_footer{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        
    }
    .post-card_image{
        width: 100%;
        height: 200px;
        overflow: hidden;

    }
    .post-card_image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .post-card_link{
        color: var(--color-primary);
        font-weight: 600;
    }
</style>