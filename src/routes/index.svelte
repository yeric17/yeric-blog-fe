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
	
	import {user} from '$stores/user';
	import {posts} from '$stores/posts';
	import {onMount} from 'svelte';
	import Loader from '$components/Loader.svelte';
	import UserAvatar from '$components/UserAvatar.svelte';
	import Interaction from '$components/Interaction.svelte';
	import PostBanner from '$components/PostBanner.svelte';
	import PostCard from '$components/PostCard.svelte';
	import Category from '$components/Category.svelte';

	export let postBanner;
	
	let filterCategories = [
	
	]

	function LikeMe(post){
		if($user.authenticated){
			return post.likes && post.likes.some(like => like.author_id == $user.id);
		}
		return false;
	}

	onMount(async function(){
		if($posts.length > 0){
			$posts.forEach(post => {
				if(post.categories){
					post.categories.forEach(category => {
						if(!filterCategories.includes(category)){
							filterCategories = [...filterCategories,category];
						}
					})
				}
			})
		}
	})
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
		<div class="posts_nav">
			<div class="posts_filters">
				{#each filterCategories as filter}
				<Category>{filter}</Category>
				{/each}
			</div>
			<div class="search">
				<input type="text" placeholder="Buscar..." />
			</div>
		</div>
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
		padding-bottom: var(--spacing-lg);
		padding-top: var(--spacing-lg);
		background-color: var(--color-gray);
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
		grid-gap: var(--spacing-xl);
		justify-content: center;
		align-items: center;
	}
	.posts_nav{
		padding-top: var(--spacing-lg);
		padding-bottom: var(--spacing-lg);
		border-top: 1px solid var(--color-gray-light);
		display: flex;
		justify-content: space-between;
	}
	.posts_filters {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		padding-bottom: var(--spacing-xxl);
	}
	.search input{
		display: flex;
		border: 1px solid var(--color-secondary-light);
		border-radius: 5px;
		padding: var(--spacing-sm);
		width: 100%;
		outline: none;
	}
	@media (min-width: 1200px) {
		.posts-list {
			padding-left:0;
			padding-right:0;
		}
	}
</style>