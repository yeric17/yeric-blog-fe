<div class="container">
    <slot></slot>
</div>

<style>
    .container{
        max-width: var(--max-width);
        margin: 0 auto;
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
        position: relative;
    }

    @media screen and (min-width: 768px){
        .container{
            padding: 1rem;
        }
    }
</style>