<div class="container">
    <slot></slot>
</div>

<style>
    .container{
        max-width: var(--max-width);
        margin: 0 auto;
        padding-top: var(--spacing-xxl);
        padding-bottom: var(--spacing-xxl);
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
    }

    @media screen and (min-width: 1200px){
        .container{
            padding:0;
        }
    }
</style>