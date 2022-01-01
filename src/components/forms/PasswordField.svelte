<script>
    import {createEventDispatcher} from 'svelte';
    const dispacher = createEventDispatcher();


    // export let options = {
    //     id: '',
    //     name: '',
    //     placeholder: '',
    //     required: true,
    //     autocomplete: "",
    //     validated: false,
    //     pattern: null,
    // }
    export let id = '';
    export let name = '';
    export let placeholder = '';
    export let required = true;
    export let autocomplete = "";
    export let validated = false;
    export let pattern = null;

    export let value = '';
    export let success = false;

    let hasError = false;
    let isFocus = false;
    let errorMessage = '';

    $: action = isFocus ||  value !== '' && value !== undefined && value !== null ? 'focus' : '';

    function onFocus(event) {
        dispacher('focus',event);
        isFocus = true;
    }

    function onBlur(event) {
        dispacher('blur', event);
        isFocus = false;
        validate(event);
    }

    function validate(event) {
        if(!validated) return;
        
        let requiedValide = checkRequired();

        if (!requiedValide && value === '') {
            hasError = true;
            success = false;
            errorMessage = 'El campo es requerido';
        }
        else {
            hasError = false;
            success = true;
            errorMessage = '';
        }
        //valid pattern
        if(event.target.pattern) {
            let patternValide = checkPattern(event.target.pattern);
            if(!patternValide) {
                hasError = true;
                success = false;
                errorMessage = 'El campo no cumple con el formato requerido';
            }
        }
    }

    function checkPattern(pattern) {
        let regex = new RegExp(pattern);
        return regex.test(value);
    }

    function checkRequired() {
        return required && value !== '' || !required;
    }
</script>

<label for="{id}" class="text-field{hasError?' error':''}{success?' success':''}">
    <div class="text-field_wrapper">
        <span class="label-text {action}" >
            <slot></slot>
            {#if !required}
                <span class="required-text">[Opcional]</span>
            {/if}
        </span>
        <input class="text-field_input" type="password" id="{id}" name="{name}" placeholder="{placeholder}" required="{required}" autocomplete="{autocomplete}" on:focus={onFocus} on:blur={onBlur}  bind:value={value} pattern={pattern}/>
    </div>

    {#if hasError}
        <span class="error-message"><i class="fas fa-exclamation-circle"></i> {errorMessage}</span>
    {/if}
</label>

<style>

</style>