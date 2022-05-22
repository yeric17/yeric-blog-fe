<script>
    import { page } from "$app/stores";
    export let url = "";
    export let name = "";
</script>

<style >
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
    .nav_item a.active {
        background-color: var(--color-primary);
        color: var(--color-secondary-text);
        
    }
    .nav_link_text {
        pointer-events: none;
    }
</style>

  <li class="nav_item">
      <a class:active={$page.url.pathname === url} href={url} class="nav_link">
          <span class="nav_link_text">{name}</span>
      </a>
  </li>
