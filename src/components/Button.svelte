<script>
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let btnType = 'primary';

    function handleClick() {
        dispatch('click');
    }
</script>


<button class="btn btn-{btnType}" on:click={handleClick}>
<slot>
</slot>
</button>

<style>
.btn-primary{
    background-color: var(--color-primary);
    color: var(--color-primary-text);
    
    box-shadow: 0 1px 0 1.5px rgba(0, 0, 0, 0.1),
                0px 1px 0px 1.5px var(--color-primary-dark),
                inset 0px 1.5px .2px 0px rgba(255, 255, 255, 0.45);
}
.btn-primary:hover{
    background-color: var(--color-primary-dark);
}
.btn-primary:active{
    background-color: var(--color-primary-dark);
}
.btn-primary-variant{
    background-color: #F7DEDC;
    color: var(--color-primary);
    box-shadow: 0 1px 0 1.5px rgba(0, 0, 0, 0.1),
            0px 1px 0px 1.5px var(--color-primary-dark),
            inset 0px 1.5px .2px 0px rgba(255, 255, 255, 0.45);
}
.btn-primary-variant:hover{
    background-color: var(--color-primary);
    color: var(--color-white);
}
.btn-primary-variant:active{
    background-color: var(--color-primary);
    color: var(--color-white);
}
.btn-secondary{
    background-color: var(--color-secondary);
    color: var(--color-secondary-text);
}
.btn-secondary-variant{
    background-color: var(--color-gray-light);
    color: var(--color-secondary);
    box-shadow: 0 1px 0 1.5px rgba(0, 0, 0, 0.1),
            0px 1px 0px 1.5px var(--color-secondary-dark),
            inset 0px 1.5px .2px 0px rgba(255, 255, 255, 0.45);
}
.btn-secondary-variant:hover{
    background-color: var(--color-secondary);
    color: var(--color-white);
}
.btn-secondary-variant:active{
    background-color: var(--color-secondary);
    color: var(--color-white);
}
</style>