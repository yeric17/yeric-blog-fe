

<script>
    import {user} from '$stores/user'
    import {goto} from '$app/navigation'
    import {fade} from 'svelte/transition'
    import {page} from '$app/stores'
    import DropArea from '$components/DropArea.svelte'
    import MediaQuery from '$components/MediaQuery.svelte'

    /* svelte components */
    import AsideNav from '$components/AsideNav.svelte';
    import Button from '$components/Button.svelte';

    let showNav = false;
    let default_avatar = 'http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg';

    let editPhotoMode = false;
    let mobile = false;
    function goLogin() {
        goto('/login');
    }

    function goRegister() {
        goto('/register');
    }

</script>

<header class="header">
    <MediaQuery is="md-">
        <div class="header_logo">
            <a href="/">
                <img src="http://localhost:7070/images/yericdev_logo_mobile.png" alt="">
            </a>
        </div>
        <button class="btn-icon" on:click={() => showNav = !showNav}>
            <span class="icon-menu"></span>
        </button>
    </MediaQuery>
    <MediaQuery is="lg+">    
        <div class="header_logo">
            <a href="/">
                <img src="http://localhost:7070/images/yericdev_logo.png" alt="">
            </a>
        </div>

        <nav class="desk-nav">
            <ul class="desk-nav_list">
                <li class:active={$page.url.pathname === "/"}  class="desk-nav_list_item"><a href="/">Blog</a></li>
                <li class:active={$page.url.pathname === "/about"} class="desk-nav_list_item"><a href="/about">Acerca de mi</a></li>
                <li class:active={$page.url.pathname === "/contact"} class="desk-nav_list_item"><a href="/contact">Contacto</a></li>
            </ul>
        </nav>
    </MediaQuery>
    <div class="header_section_nav-buttons">
        {#if !$user.authenticated}
        <Button btnType="primary-variant" on:click={goLogin}>Ingresar</Button>
        <Button btnType="secondary-variant" on:click={goRegister}>Registrarse</Button>
        {/if}
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
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
        background: var(--color-secondary);
        position: relative;
        width: 100%;
        height: 70px;
        gap: var(--spacing-lg);
        z-index: var(--z-index-lv1);
        padding-left: var(--spacing-md);
        padding-right: var(--spacing-md);
    }
    .btn-icon{
        color: var(--color-gray);
    }
    .aside-bar_container {
        position: fixed;
        top: var(--spacing-sm);
        left: var(--spacing-sm);
        z-index: var(--z-index-lv3);
    }
    .header_section_nav-buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
        justify-self: end;
    }
    .desk-nav {
        height: 100%;
    }
    .desk-nav_list{
        height: 100%;
        align-items: flex-end;
        display: flex;
        gap: var(--spacing-md);
        font-size: var(--font-size-lg);
        color: var(--color-gray);
        text-align: center;
    }
    .desk-nav_list_item{
        position: relative;
        min-width: 100px;
        padding-bottom: var(--spacing-md);
    }
    /* .desk-nav_list_item::after{
        content: "";
        display: block;
        width: 100%;
        height: 0;
        background: var(--color-primary);
        margin-top: var(--spacing-sm);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%)
    }

    .desk-nav_list_item.active::after{
        height: 1px;
    } */
    .desk-nav_list_item::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        height: 14px;
        width: 14px;
        background: var(--color-primary);
        transform: translate(-50%, 50%) rotate(45deg);
        box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.1),
                0 0 0 1.5px var(--color-primary-dark),
                inset 0 0 0 .5px rgba(255, 255, 255, 0.45);
        opacity: 0;
    }

    .desk-nav_list_item.active::before{
        opacity: 1;
    }


    @media (min-width: 768px) {
        .header{
            padding-left: var(--spacing-xl);
            padding-right: var(--spacing-xl);
        }
    }

</style>

