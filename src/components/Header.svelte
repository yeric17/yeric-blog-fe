

<script>
    import {clickOutside} from '$lib/click-outside';
    import {session} from '$app/stores'
    import {goto} from '$app/navigation'
    import {slide} from 'svelte/transition'
    import {page} from '$app/stores'
    import {API_HOST} from '$stores/config'
    import DropArea from '$components/DropArea.svelte'
    import MediaQuery from '$components/MediaQuery.svelte'

    /* svelte components */
    import AsideNav from '$components/AsideNav.svelte';
    import Button from '$components/Button.svelte';

    let showNav = false;
    let default_avatar = 'http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg';

    let showAvatarNav = false;
    let editAvatar = false;

    function goLogin() {
        goto('/login');
    }

    function goRegister() {
        goto('/register');
    }

    function toggleNav() {
        showNav = !showNav;
    }

    async function handleLogout(event){
        await fetch("api/logout");
        goto('/');
        window.location.reload();
    }

    function handleClickOutside(event) {
        showNav = false;
        showAvatarNav = false;
        console.log('click outside');
    }

</script>

<header class="header">
    <MediaQuery is="md-">
        <div class="header_logo">
            <a href="/">
                <img src={`${API_HOST}/images/yericdev_logo_mobile.png`} alt="">
            </a>
        </div>
        <button class="btn-icon" on:click={toggleNav}>
            <span class="icon-menu"></span>
        </button>
    </MediaQuery>
    <MediaQuery is="lg+">    
        <div class="header_logo">
            <a href="/">
                <img src={`${API_HOST}/images/yericdev_logo.png`} alt="">
            </a>
        </div>

        <nav class="desk-nav">
            <ul class="desk-nav_list">
                <li class:active={$page.url.pathname === "/"}  class="desk-nav_list_item"><a href="/">Blog</a></li>
                <li class:active={$page.url.pathname === "/about"} class="desk-nav_list_item"><a href="/about">Acerca de mi</a></li>
                <li class:active={$page.url.pathname === "/contact"} class="desk-nav_list_item"><a href="/contact">Contacto</a></li>
                {#if $session.user.authenticated && $session.user.role_id == 1}
                    <li class:active={$page.url.pathname === "/addpost"} class="desk-nav_list_item"><a href="/addpost">Crear Post</a></li>
                {/if}
            </ul>
        </nav>
    </MediaQuery>
    <div class="header_section_nav-buttons">
        {#if !$session.user.authenticated}
        <Button btnType="primary-variant" on:click={goLogin}>Ingresar</Button>
        <Button btnType="secondary-variant" on:click={goRegister}>Registrarse</Button>
        {/if}
    </div>
    {#if $session.user.authenticated}
    <div class:editable={$session.user.authenticated} class="user_avatar" on:click|preventDefault={(event)=>{
        event.stopPropagation();
      
        showAvatarNav = !showAvatarNav;
        
        }}>
        {#if editAvatar}
            <div class="drop-area_container">
                <DropArea apiUrl={`${API_HOST}/users/upload?name=${$session.user.id}`} on:uploaded={()=>{
                    window.location.reload();
                }
                }></DropArea>
            </div>
        {:else}
            <img src={$session.user.picture || default_avatar} alt="userAvatar">
        {/if}
        {#if showAvatarNav}
            <div class="user_avatar_menu" transition:slide={{duration:300}} use:clickOutside on:click-outside={handleClickOutside}>
                <button class="btn-avatar" on:click={handleLogout}>Cerrar sesión</button>
                <button class="btn-avatar" on:click={()=>{editAvatar = true}}>Editar foto</button>
            </div>
        {/if}
    </div>
    {/if}
</header>
{#if showNav}
    <div class="aside-bar_container" use:clickOutside on:click-outside={handleClickOutside}>
        <AsideNav bind:visible={showNav} user={$session.user}/>
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
        height: 40px;
    }
    .desk-nav_list_item a{
        height: 100%;
        display: block;
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
    .user_avatar{
        height: 40px;
        width: 40px;
        position: relative;
        cursor: pointer;
    }
    .user_avatar_menu{
        position: absolute;
        bottom: 0;
        right:0;
        min-width: 100px;
        transform: translate(0, 100%);
    }
    .user_avatar_menu button{
        background: var(--color-secondary-light);
        color: var(--color-white);
        font-size: var(--font-size-md);
        padding: var(--spacing-sm);
        border: none;
        border-radius: var(--border-radius-sm);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .user_avatar img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        background-color: var(--color-gray);
    }
    .btn-avatar{
        width: 100%;
        text-align: left;
    }
    .btn-avatar:hover{
        background-color: var(--color-secondary-light);
    }

    .drop-area_container{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);        
        width: 30vw;
        height: 30vw;
        background-color: white;
        border: var(--spacing-md) solid var(--color-primary-light);
        box-shadow: var(--shadow-lv4);
        
    }

    @media (min-width: 768px) {
        .header{
            padding-left: var(--spacing-xl);
            padding-right: var(--spacing-xl);
        }
    }

</style>

