
<script context="module">
	export const load = async function({error, status}){

		return {
			props:{
				error,
				status
			}
		}
	} 
</script>

<script>
	export let error = null;
	export let status = null;
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<section class="error-container">
	<div class="error_status">
		<span>{status}</span>
	</div>	
	<div class="error_message">
		<span>{error.message}</span>
	</div>
	{#if error.stack}
	<div class="error_stack">
		<span>{error.stack}</span>
	</div>
	{/if}
	{#if error.frame}
	<div class="error_frame">
		<span>{error.frame}</span>
	</div>
	{/if}
</section>

<style>
	.error-container{
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 
			"error_status"
			"error_message"
			"error_stack"
			"error_frame";
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		gap: 20px;
		padding: var(--spacing-lg);
		background-color: white;
		border-radius: 5px;
		margin-top: var(--spacing-lg);
		position: relative;
		max-width: var(--max-width);
	}
	.error_status{
		font-size: 20rem;
		font-weight: bold;
		color: #f00;
		width: 100%;
		opacity: 0.1;
		text-align: center;
		grid-area: error_status;
			
	}
	.error_message{
		font-size: 1.5rem;
		font-weight: bold;
		color: #f00;
		border-bottom: 1px solid var(--color-gray-light);
		padding-bottom: var(--spacing-md);
		width: 100%;
	}
	.error_stack{
		border-bottom: 1px solid var(--color-gray-light);
		padding-bottom: var(--spacing-md);
		width: 100%;
		grid-area: error_stack;
	}
	.error_frame{
		font-size: 1.5rem;
		font-weight: bold;
		color: #f00;
		border-bottom: 1px solid var(--color-gray-light);
		padding-bottom: var(--spacing-md);
		width: 100%;
		text-align: center;
		grid-area: error_frame;
	}

	@media (min-width: 768px){
		.error-container{
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: minmax(0, auto);
			grid-template-areas: 
				"error_status error_message"
				"error_status error_stack"
				"error_status error_frame";
		}
	}
</style>