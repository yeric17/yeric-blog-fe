
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
    import SocialLink from '$components/SocialLink.svelte';
    import { pages } from "$stores/pages";
    import { page } from "$app/stores";
    import {notifications,addNotification} from '$stores/notifications';
    import NavItem from "$components/NavItem.svelte";
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
            <div class="footer_header">
                <div class="footer_contact">
                    <div class="footer_social">
                        <span class="footer_social_title">
                            Sígueme en:
                        </span>
                        <div class="social-section_list">
                            <SocialLink
                            type="linkedin"
                            color="white"
                            size="2rem"
                            />
                            <SocialLink
                            type="twitter"
                            color="white"
                            size="2rem"
                            />
                            <SocialLink
                            type="github"
                            color="white"
                            size="2rem"
                            />
                        </div>
                        <div class="footer_contact-info">
                            <span>yeric.dev@gmail.com</span>
                        </div>
                    </div>
                </div>
                 <div class="footer_nav">
                     <span class="footer_nav_title">Paginas del sitio</span>
                     <ul class="footer_nav_list">
                         {#each pages as pag}
                             {#if (pag.protected && user && user.authenticated) || pag.protected === false}
                                 <li
                                     class:active={$page.url.pathname === pag.url}
                                     class="footer_nav_list_item">
                                     <a href={pag.url}>{pag.name}</a>
                                 </li>
                             {/if}
                         {/each}
                     </ul>
                 </div>
                <div class="footer_logo">
                      <img class="footer_logo_img" src={`/yeric_dev_white_logo.svg`} alt="logo" />
                </div>
            </div>
            <div class="footer_copyright">
                <span>&copy; 2022 Carlos Yeric Fonseca Rios. All Rights Reserved</span>
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
        background-color: var(--color-tertiary-dark);
        color: var(--color-tertiary-text);
    }
    .footer_container {
        max-width: var(--max-width);
        margin: 0 auto;
    }
    .footer_header{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .footer_contact{
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .social-section_list{
        display: flex;
        gap: 2rem;
    }
    .footer_logo{
        justify-self: end;
    }
    .footer_logo_img{
        width: 6rem;
    }
    .footer_copyright{
        border-top: 1px solid var(--color-secondary-dark);
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        font-weight: 200;
    }
    .footer_nav, .footer_social{
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 1rem;
    }
    .footer_nav_title, .footer_social_title{
        font-size: 1.2rem;
        font-weight: 600;
    }
    .footer_nav_list{
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: .5rem;
    }
    .footer_nav_list_item.active{
        
        text-decoration: underline;
    }
    .footer_contact-info{
        font-weight: 200;
    }
</style>