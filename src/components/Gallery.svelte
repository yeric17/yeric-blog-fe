
<script>
    export let minwidth = "300px";
    export let maxwidth = "400px";
</script>
<section class="gallery" style="--minwidth: {minwidth}; --maxwidth: {maxwidth};">
    <slot></slot>
</section>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--minwidth), var(--maxwidth)));
        grid-gap: 2rem;
        justify-items: center;
    }
</style>