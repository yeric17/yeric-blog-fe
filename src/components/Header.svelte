

<script>
    import {user} from '$stores/user'
    import {goto} from '$app/navigation'

    /* svelte components */
    import AsideNav from '$components/AsideNav.svelte';
    import Button from '$components/Button.svelte';

    let showNav = false;
    let default_avatar = 'http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg';

    function goLogin() {
        goto('/login');
    }

    function goRegister() {
        goto('/register');
    }

</script>

<header class="header">
    <button class="btn-icon" on:click={() => showNav = !showNav}>
        <span class="icon-menu"></span>
    </button>
    <div class="header_section_nav-buttons">
        {#if !$user.authenticated}
        <Button on:click={goLogin}>Ingresar</Button>
        <Button btnType="secondary-variant" on:click={goRegister}>Registrarse</Button>
        {/if}
    </div>
    <div class="user_avatar">
        <img src="{$user.authenticated?$user.picture:default_avatar}" alt="user_name">
    </div>
</header>
{#if showNav}
    <div class="aside-bar_container">
        <AsideNav bind:visible={showNav} user={$user}/>
    </div>
{/if}


<style>
    .header {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        padding: var(--spacing-sm);
        background: #fff;
        border-bottom: 1px solid #eee;
        width: 100%;
        gap: var(--spacing-md);
    }

    .user_avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: #eee;
    }

    .user_avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .aside-bar_container {
        position: fixed;
        top: var(--spacing-sm);
        left: var(--spacing-sm);
        z-index: var(--z-index-lv1);
    }
    .header_section_nav-buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
    }

    @media (min-width: 768px) {
        .header{
            padding-left: var(--spacing-xl);
            padding-right: var(--spacing-xl);
        }
    }

</style>

