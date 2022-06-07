<script>
  import { clickOutside } from "$lib/click-outside";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";
  import { CreateTraductor } from "$lib/traductor.js";

  /* svelte components */
  import AsideNav from "$components/AsideNav.svelte";
  import MediaQuery from "$components/MediaQuery.svelte";
  import Container from "$components/Container.svelte";
  import NavItem from "$components/NavItem.svelte";

  let showNav = false;
  export let user = null;



  const pages = [
	{
	  name: "Acerca de mi",
	  url: "/",
	  protected: false
	},
	{
	  name: "Proyectos",
	  url: "/projects",
	  protected: false
	},
	{
	  name: "Contacto",
	  url: "/contact",
	  protected: false
	},
	{
	  name: "Mensajes",
	  url: "/messages",
	  protected: true
	}
  ];

  function toggleNav() {
    showNav = !showNav;
  }

  async function handleLogout(event) {
    await fetch("api/logout");
    goto("/");
    window.location.reload();
  }

  function handleClickOutside(event) {
    showNav = false;
  }
</script>

<style>
  .header {
	--header-height: 70px;
    background: linear-gradient(90deg, var(--color-white) 50%, var(--color-tertiary) 50%);
	height: var(--header-height);
	position: relative;
	z-index: 300;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .header_container {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
	grid-template-rows: 70px;
    align-items: center;
    position: relative;
    z-index: var(--z-index-lv1);
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
	max-width: var(--max-width);
	margin: 0 auto;
  }
  .btn-icon {
    color: var(--color-gray);
  }
  .aside-bar_container {
    position: fixed;
    top: var(--spacing-sm);
    left: var(--spacing-sm);
    z-index: 400;
  }

  .desk-nav {
    height: 100%;
	background-color: var(--color-tertiary);
	width: 100%;
	
  }
  .mobile-nav {
    display: flex;
    justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: var(--color-tertiary);
	height: 100%;
	position: relative;
  }
  .mobile-nav::before {
	content: "";
	position: absolute;
	display: block;
	width: 0;
	height: 0;
	border-right: var(--header-height) solid var(--color-tertiary);
	border-bottom: var(--header-height) solid transparent;      
	left: 0;
	top: 0;
	z-index: 200;
	transform: translateX(-100%);
  }
  .desk-nav_list {
    height: 100%;
    align-items: flex-end;
	justify-content: flex-end;
    display: flex;
    gap: var(--spacing-md);
    font-size: var(--font-size-lg);
    color: var(--color-gray);
	position: relative;
  }
	.desk-nav_list::before{
		content: "";
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-right: var(--header-height) solid var(--color-tertiary);
		border-bottom: var(--header-height) solid transparent;      
		left: 0;
		top: 0;
		z-index: 100;
		transform: translateX(-100%);
	}
	.header_logo{
		height: 100%;
		background-color: var(--color-white);
		position: relative;
	}
	.header_logo::before{
		content: "";
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-bottom: var(--header-height) solid var(--color-white);
		border-right: var(--header-height) solid transparent;      
		right: .5px;
		top: 0;
		z-index: 100;
		transform: translateX(100%);
	}
	.header_logo a {
		height: 100%;
		display: block;
		padding-bottom: var(--spacing-xs);
		padding-top: var(--spacing-xs);
	}
	.header_logo img{
		height: 100%;
		display: block;
	}

	.header_segment{
		position: relative;
		width: calc(50px + var(--header-height));
		height: 100%;
		background-color: var(--color-primary);
	}
</style>

<header class="header">
    <div class="header_container">
      <div class="header_logo">
        <a href="/">
          <img src={`/yeric_dev_logo.svg`} alt="" />
        </a>
      </div>
	  <div class="header_segment"></div>
      <MediaQuery is="md-">
        <div class="mobile-nav">
          <button class="btn-icon" on:click={toggleNav}>
            <span class="icon-menu" />
          </button>
        </div>
      </MediaQuery>
      <MediaQuery is="lg+">
        <nav class="desk-nav">
          <ul class="desk-nav_list">
			{#each pages as page}
				{#if page.protected && user || page.protected === false}
					<NavItem name={page.name} url={page.url} />
				{/if}
			{/each}
          </ul>
        </nav>
      </MediaQuery>
    </div>
</header>

{#if showNav}
  <div
    class="aside-bar_container"
    use:clickOutside
    on:click-outside={handleClickOutside}>
    <AsideNav bind:visible={showNav} />
  </div>
{/if}
