<script>


    import {scale} from 'svelte/transition';

    import AsideNavItem from "$components/AsideNavItem.svelte";

    export let visible = false;

  
    import { pages } from "$stores/pages";

</script>


<aside class="aside-nav" transition:scale={{duration:300}}>
    <section class="aside-nav_header">
        <button class="btn-icon" on:click={() => visible = false}>
            <span class="icon-close-circle"></span>
        </button>
    </section>
    <section class="navigation">
        <ul class="nav_list">
 			{#each pages as page}
				<AsideNavItem name={page.name} url={page.url} />
			{/each}
        </ul>
    </section>
</aside>

<style>
    .aside-nav {
        min-width: 300px;
        background: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        overflow: hidden;
        padding-bottom: var(--spacing-lg);
        
        box-shadow: 0 2px 0 0 var(--color-gray-light),
                    0 4px 2px 0 rgba(0, 0, 0, 0.1);
        transform-origin: top left;
        
    }

    .aside-nav_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: var(--spacing-sm);
        background-color: var(--color-primary);
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.15),
                    0 2px 0 0 var(--color-primary-light),
                    inset 0 1.5px 0 0 rgba(255, 255, 255, 0.3);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .navigation{
        padding-top: var(--spacing-md);
    }
    .nav_list {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(2rem, auto);
        gap: var(--spacing-sm);
    }
 

</style>