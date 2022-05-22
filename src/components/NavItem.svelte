<script>
    import { page } from "$app/stores";
    export let url = "";
    export let name = "";
</script>

<style >
    .desk-nav_list_item {
    position: relative;
    min-width: 100px;
    height: 40px;
  }
  .desk-nav_list_item a {
    height: 100%;
    display: block;
    widows: 100%;
    text-align: center;
    font-size: var(--font-size-md);
  }

  .desk-nav_list_item::before {
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
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.45);
    opacity: 0;
  }

  .desk-nav_list_item.active::before {
    opacity: 1;
  }
</style>

<li
    class:active={$page.url.pathname === url}
    class="desk-nav_list_item">
    <a href={url}>{name}</a>
</li>

