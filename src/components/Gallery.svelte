
<script>
    export let minwidth = "300px";
</script>
<section class="gallery" style="--minwidth: {minwidth}">
    <slot></slot>
</section>

<style>
    .gallery {
        display: grid;
<<<<<<< HEAD
        grid-template-columns: repeat(auto-fit, minmax(var(--minwidth), 1fr));
        grid-gap: 1rem;
=======
        grid-template-columns: repeat(auto-fit, minmax(var(--maxwidth), 1fr));
        grid-gap: 2rem;
>>>>>>> 1dd47f86c3987095b748c5efb0b540fe6a31fbbf
        justify-items: center;
    }
</style>