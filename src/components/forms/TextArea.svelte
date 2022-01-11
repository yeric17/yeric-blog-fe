
<script>
    import {createEventDispatcher} from 'svelte';
    const dispacher = createEventDispatcher();

    export let id = "my-id";
    export let name = "my-name";
    export let required = true;
    export let value = null;
    export let success = false;
    let hasError = false;
    let errorMessage = "";
    let isFocus = false;

    $: action = isFocus ||  (value !== '' && value !== undefined && value !== null) ? true : false;

    function onFocus(event) {
        isFocus = true;
        dispacher('focus',event);
    }

    function onBlur(event) {
        isFocus = false;
        Validate();
        dispacher('blur', event);
    }

    function Validate(event) {
        if (required && value === '') {
            hasError = true;
            errorMessage = "Este campo es requerido";
            success = false;
        }
        else {
            hasError = false;
            errorMessage = "";
            success = true;
        }
    }
</script>

<label class="text-area" for={id} class:error={hasError} class:success={success}>
    <div class="text-area_wrapper">
        <span class="text-area_label" class:focus={action}>
            <slot></slot>
            {#if !required}
                <span class="required-text">[Opcional]</span>
            {/if}
        </span>
        <textarea class="text-area_input" name={name} id={id} cols="30" rows="10" bind:value={value} on:focus={onFocus} on:blur={onBlur}  on:input={Validate}></textarea>
    </div>
    {#if hasError}
        <span class="error-message"><i class="fas fa-exclamation-circle"></i> {errorMessage}</span>
    {/if}
</label>

<style>
    .text-area {
        width: 100%;
        display: inline-flex;
        flex-direction: column;
        padding-top: var(--spacing-xl);
    }

    .text-area_wrapper {
        width: 100%;
        position: relative;
        display: flex;
    }

    .text-area_label {
        position: absolute;
        top: var(--spacing-md);
        left: var(--spacing-sm);
        transform: translateY(-50%);
        transition: all 0.3s ease;
        color: var(--color-gray);
    }
    .text-area_label.focus{
        top: -1.2rem;
        left: 0;
        transform: translateY(0);
        font-size: var(--font-size-sm);
    }
    .text-area_input{
        border: 1px solid var(--color-gray-light);
        border-radius: 4px;
        padding: var(--spacing-sm);
        outline: none;
        width: 100%;
    }
    .text-area.error .text-area_input{
        border: 1px solid var(--color-danger);
    }
    .text-area.success .text-area_input{
        border: 1px solid var(--color-success);
    }
    .error-message{
        color: var(--color-danger);
        font-size: var(--font-size-sm);
        margin-top: var(--spacing-sm);
        display: flex;
    }
</style>