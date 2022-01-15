
<div class="category">
    <span class="category-icon">
        {#if $$slots.icon}
        <slot name="icon"></slot>
        {:else}
        <span class="icon-tag"></span>
        {/if}
    </span>
    <slot></slot>
</div>

<style>
.category{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    border-radius: 100px;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    cursor: pointer;
    user-select: none;
}
.category:hover{
    background-color: var(--color-primary);
    color: var(--color-white);
}
.category-icon{
    display: inline-flex;
}
</style>