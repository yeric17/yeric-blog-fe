<div class="twin-container">
    <div class="twin-container_left">
        <slot name="left"></slot>
    </div>
    <div class="twin-container_right">
        <slot name="right"></slot>
    </div>
</div>

<style>
    .twin-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 2rem;
        max-width: var(--max-width);
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        .twin-container {
            grid-template-columns: 1fr 1fr;
        }
    }


</style>