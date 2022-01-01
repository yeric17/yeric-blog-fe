<script>

    import {user,Logout} from '$stores/user';
    import {goto} from '$app/navigation'
    let default_avatar = 'http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg';
    
    import {scale} from 'svelte/transition';

    export let visible = false;

    function handleLinkClick(){
        visible = false;
    }
    async function handleLogout(){
        Logout();
        goto('/login');
    }
</script>


<aside class="aside-nav" transition:scale={{duration:300}}>
    <section class="aside-nav_header">
        <div class="user_avatar">
            <img src="{$user.avatar_url?$user.avatar_url:default_avatar}" alt="user_name">
        </div>
        <div class="user_name">
            <h3>{$user.name?$user.name:''}</h3>
        </div>
        <button class="btn-icon" on:click={() => visible = false}>
            <span class="icon-arrow-circle-left"></span>
        </button>
    </section>
    <section class="navigation">
        <ul class="nav_list">
            <li class="nav_item">
                <a href="/" class="nav_link" on:click={handleLinkClick}>
                    <span class="nav_link_text">Blog</span>
                </a>
            </li>
            <li class="nav_item">
                <a href="/about" class="nav_link" on:click={handleLinkClick}>
                    <span class="nav_link_text">¿Quien soy?</span>
                </a>
            </li>
            <li class="nav_item">
                <a href="/contact" class="nav_link" on:click={handleLinkClick}>
                    <span class="nav_link_text">Contacto</span>
                </a>
            </li>
            {#if !$user.authenticated}
            <li class="nav_item">
                <a href="/login" class="nav_link" on:click={handleLinkClick}>
                    <span class="nav_link_text">Login</span>
                </a>
            </li>
            <li class="nav_item">
                <a href="/register" class="nav_link" on:click={handleLinkClick}>
                    <span class="nav_link_text">Registro</span>
                </a>
            </li>
            {:else}
            <li class="nav_item">
                <a href="#" class="nav_link" on:click={handleLogout}>
                    <span class="nav_link_text">Cerrar sesión</span>
                </a>
            </li>
            {/if}
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
        background-color: var(--color-primary-light);
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.15),
                    0 2px 0 0 var(--color-primary-light),
                    inset 0 0 1px 2px rgba(255, 255, 255, 0.2);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .user_avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .user_avatar img {
        width: 100%;
        height: 100%;
    }
    .user_name {
        padding-right: var(--spacing-sm);
        padding-left: var(--spacing-sm);
        color: var(--color-primary-text);
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
    .nav_item a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        padding-right: var(--spacing-md);
        color: var(--color-primary-dark);
        
    }
    .nav_item a:hover {
        color: var(--color-primary-text);
        background-color: var(--color-primary-light);
    }
    .btn-icon {
        color: var(--color-primary-text);
    }
    .nav_link_text {
        pointer-events: none;
    }
    .icon-arrow-circle-left{
        pointer-events: none;
    }
</style>