

<script>
    import {user} from '$stores/user'
    import {goto} from '$app/navigation'
    import {fade} from 'svelte/transition'
    import DropArea from '$components/DropArea.svelte'

    /* svelte components */
    import AsideNav from '$components/AsideNav.svelte';
    import Button from '$components/Button.svelte';

    let showNav = false;
    let default_avatar = 'http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg';

    let editPhotoMode = false;

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
    <div class:editable={$user.authenticated} class="user_avatar" on:click|preventDefault={()=>{
        if($user.authenticated){
            editPhotoMode = !editPhotoMode;
        }
    }}>
        <img src="{$user.authenticated?$user.picture:default_avatar}" alt="user_name">
        {#if editPhotoMode}
            <div class="modal_drop-area" transition:fade={{duration:300}}>
                <button class="modal_drop-area_close-btn" on:click|preventDefault={(event)=>{
                    event.stopPropagation();
                    editPhotoMode = false
                }}>x</button>
                <DropArea apiUrl={`http://localhost:7070/users/upload?name=${$user.id}`}/>
            </div>
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
        position: relative;
    }
    .user_avatar.editable{
        cursor: pointer;
    }
    .user_avatar.editable:hover{
        border: 1px solid #ccc;
    }
    .user_avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
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

    .modal_drop-area {
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: var(--color-white);
        z-index: var(--z-index-lv2);
        box-shadow: var(--shadow-lv4);
        border: var(--spacing-md) solid var(--color-secondary-light);
    }

    .modal_drop-area_close-btn {
        position: absolute;
        top: .5rem;
        right: .5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: var(--color-danger);
        color: var(--color-white);
        border:none;
        border-radius: 2px;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .header{
            padding-left: var(--spacing-xl);
            padding-right: var(--spacing-xl);
        }
    }

</style>

