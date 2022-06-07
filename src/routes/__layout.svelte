
<script context="module">
    import {API_HOST} from "$stores/config";
    export const load = async function({session}){
        let user = session.user;
        return {
            props: {
                user,
            }
        }
    }
</script>


<script>
    import Header from '$components/Header.svelte';
    import Container from '$components/Container.svelte';
    import SocialLink from '$components/SocialLink.svelte';
    import TwinContainer from '$components/TwinContainer.svelte';
    import {notifications,addNotification} from '$stores/notifications';
    import Toast from '$components/Toast.svelte';
    import { fly } from 'svelte/transition';
    import '$css/fonts.css';
    import '$css/forms.css';
    import '$css/icons.css';
    import '$css/variables.css';
    import '$css/global.css';

    export let user = null;
</script>

{#if user.authenticated === true || user.authenticated === false}


<Header user={user}></Header>

<main class="main">
    <div class="main_section">
        <slot></slot>
    </div>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_nav">
                <Container>
                    <SocialLink
                        type="linkedin"
                        color="white"
                    />
                    <SocialLink
                        type="twitter"
                        color="white"
                    />
                    <SocialLink
                        type="github"
                        color="white"
                        />
                </Container>
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

</style>