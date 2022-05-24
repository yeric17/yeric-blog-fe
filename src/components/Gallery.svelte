
<script>
    export let minwidth = "300px";
</script>
<section class="gallery" style="--minwidth: {minwidth}">
    <slot></slot>
</section>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--minwidth), 1fr));
        grid-gap: 2rem;
        justify-items: center;
    }
</style>