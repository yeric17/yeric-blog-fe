<script>
    import MediaQueryManager from '$stores/media-query';
    let mq = MediaQueryManager.mediaQueryStore;
    export let is = '';
</script>

{#if $mq.is(is)}
     <slot></slot>
{/if}