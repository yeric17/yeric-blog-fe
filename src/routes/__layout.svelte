
<script context="module">
    import {Auth} from "$stores/user";
    export const load = async function(){
        let isAuth = await Auth();
        
        return {
            props: {
                authenticated: isAuth
            }
        }
    }
</script>


<script>
    import Header from '$components/Header.svelte';
    import {notifications,addNotification} from '$stores/notifications';
    import Toast from '$components/Toast.svelte';
    import { fly } from 'svelte/transition';
    import '$css/fonts.css';
    import '$css/forms.css';
    import '$css/icons.css';
    import '$css/variables.css';
    import '$css/global.css';

    export let authenticated = null;
</script>

{#if authenticated === true || authenticated === false}

<Header></Header>

<main class="main">
    <div class="main_section">
        <slot></slot>
    </div>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_nav">
                <ul class="nav_list">
                    <li class="nav_list_item"><a href="/contact" target="_blank">Contacto</a></li>
                    <li class="nav_list_item"><a href="https://www.linkedin.com/in/yericfonseca" target="_blank">Linkedin</a></li>
                    <li class="nav_list_item"><a href="https://twitter.com/yeric17" target="_blank">Twitter</a></li>
                    <li class="nav_list_item"><a href="https://github.com/yeric17" target="_blank">Github</a></li>
                </ul>
            </div>
        </div>
    </footer>
</main>
<div class="notifications-container">
    {#if $notifications.length > 0}
    {#each $notifications as notification}
        <div class="notification-wrapper" transition:fly="{{ y: 200, duration: 2000 }}">
            <Toast type={notification.type}>
                <span slot="description">
                    {notification.message}
                </span>	
            </Toast>
        </div>
    {/each}
    {/if}
</div>
{/if}
<style>
    .main{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        min-height: 100%;
    }

    .notifications-container {
		position: fixed;
		flex-direction: column;
		bottom: 2rem;
		right: 2rem;
		z-index: 99999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

    .footer {
        background-color: var(--color-secondary-dark);
        color:white;
        padding-top: var(--spacing-xxl);
        padding-bottom: var(--spacing-xxl);
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
    }
    .footer_container {
        max-width: var(--max-width);
        margin: 0 auto;
    }

    .nav_list {
        list-style: none;
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
    }
    .nav_list_item:hover {
        text-decoration: underline;
    }
</style>