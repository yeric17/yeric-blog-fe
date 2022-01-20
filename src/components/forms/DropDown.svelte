<script>
    import {createEventDispatcher} from 'svelte';
    const dispacher = createEventDispatcher();
    export let options = [
        "option1",
        "option2",
        "option3"
    ]
    export let value = "";
    function handleChange(event){
        dispacher('change',event);
    }
</script>


<label>
    <span class="drop-down_label"><slot></slot></span>
    <select name="default_name" id="default_id" on:change={handleChange} bind:value={value}>
        {#each options as option}
        <option value="{option}">{option}</option>
        {/each}
    </select>
</label>
