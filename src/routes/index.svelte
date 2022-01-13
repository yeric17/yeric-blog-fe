<script context="module">
	import {Auth} from "$stores/user";
	import {getPosts} from '$stores/posts';
	export const load = async function({fetch}){
		const posts = await getPosts();
		let postBanner = null;
		if(posts.length > 0){	
			postBanner = posts.sort(function(a, b){
				return b.likes - a.likes
			})[0]
		}
		return {
			props: {
				postBanner,
			},
		};
	} 
</script>
<script>
	
    import {onMount} from 'svelte';
	import {user} from '$stores/user';
	import {posts} from '$stores/posts';
	import Loader from '$components/Loader.svelte';
	import UserAvatar from '$components/UserAvatar.svelte';
	import Interaction from '$components/Interaction.svelte';
	import PostBanner from '$components/PostBanner.svelte';
	import PostCard from '$components/PostCard.svelte';

	export let postBanner;
	

	function LikeMe(post){
		if($user.authenticated){
			return post.likes && post.likes.some(like => like.author_id == $user.id);
		}
		return false;
	}
</script>
<svelte:head>
	<title>Blog</title>
</svelte:head>


<main class="posts">
    <section class="posts_banner">
		{#if postBanner}
		<PostBanner likeMe={LikeMe(postBanner)} post={postBanner}/>
		{/if}
    </section>
	{#if $posts.length > 0}
	<section class="posts-list">
		<div class="posts-list_wrapper">
		{#each $posts as post}
			<PostCard likeMe={LikeMe(post)} post={post} userId={$user.id}/>
		{/each}
		</div>
	</section>
	{/if}
</main>

<style>
	.posts_banner {
		position: relative;
		width: 100%;
		padding-top: var(--spacing-lg);
		padding-bottom: var(--spacing-lg);
		background-color: var(--color-secondary-light);
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}
	.posts-list {
		padding-top: var(--spacing-lg);
		padding-bottom: var(--spacing-lg);
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.posts-list_wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: var(--spacing-md);
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 1200px) {
		.posts-list {
			padding-left:0;
			padding-right:0;
		}
	}
</style>