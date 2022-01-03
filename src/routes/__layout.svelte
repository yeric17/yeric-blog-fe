
<script context="module">
    import {Auth} from "$stores/user";
    export const load = async function(){
        let isAuth = await Auth();
        if(isAuth){
            return {
                authendication: true
            }
        }
        return {
            authendication: false
        }
    }
</script>


<script>
    import Header from '$components/Header.svelte';
    import {notifications,addNotification} from '$stores/notifications';
    import Toast from '$components/Toast.svelte';
    import { fly } from 'svelte/transition';
    import '../css/fonts.css';
    import '../css/forms.css';
    import '../css/icons.css';
    import '../css/variables.css';
    import '../css/global.css';
</script>

<Header></Header>

<main class="main">
    <slot></slot>
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

<style>
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
</style>