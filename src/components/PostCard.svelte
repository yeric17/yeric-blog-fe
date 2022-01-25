<script>
    import UserAvatar from './UserAvatar.svelte';
    import Interaction from './Interaction.svelte';
    import DropArea from './DropArea.svelte';
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


    let editImageMode = false;

</script>

<article class="post-card">
    <span class="post-card_image" class:editable={$user.authenticated && $user.id === post.author.id} on:click={()=>{editImageMode = true}}>
        {#if editImageMode}
        <DropArea/>
        <button class="btn-icon" on:click={(event)=> {
            event.stopPropagation();
            editImageMode = false
        }}>
            <span class="icon-close-circle"></span>
        </button>
        {:else}
        <img src="{post.image}" alt="">
        {/if}
    </span>
    <h3 class="post-card_title"><a sveltekit:prefetch href="/blog/{post.id}">{post.title}</a></h3>
    <p class="post-card_content">{post.resume}</p>
    <div class="post-card_footer">
        <UserAvatar userName={post.author.name} userAvatar={post.author.picture}/>
        <Interaction  data={{
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
        gap: var(--spacing-md);
    
    }
    .post-card_footer{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        
    }
    .post-card_title{
        color: var(--color-secondary);
        cursor: pointer;
        text-align: left;
        width: 100%;
    }
    .post-card_title:hover{
        color: var(--color-secondary-light);
    }
    .post-card_image{
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    .post-card_image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .post-card_image.editable{
        cursor: pointer;
    }
    .btn-icon{
        position: absolute;
        top: var(--spacing-sm);
        right: var(--spacing-sm);
        z-index: 100;
        cursor: pointer;
    }


</style>