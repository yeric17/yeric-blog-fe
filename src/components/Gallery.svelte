
<script>
    export let maxwidth = "300px";
</script>
<section class="gallery" style="--maxwidth: {maxwidth}">
    <slot></slot>
</section>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--maxwidth), 1fr));
        grid-gap: 1rem;
        justify-items: center;
    }
</style>