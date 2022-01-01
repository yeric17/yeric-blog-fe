<script>
    import UserAvatar from './UserAvatar.svelte';
    import Button from './Button.svelte';
    import {scale} from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let value = '';

    export let data = {
        name: '',
        author_id: '',
        post_id: '',
        comment_id: '',
        entity_type:  '',  
    }

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch('submit', value);
        
        let response = await fetch('http://localhost:7070/posts/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author_id: data.author_id,
                content: value,
                post_id: data.post_id,
                comment_id: data.comment_id,
                entity_type: data.entity_type,
            })
        });

        let json = await response.json();
        
        if (json && json.success) {
            dispatch('success', json.data);
        } else {
            dispatch('error', json.message);
        }
    }

    function handleCancel(e) {
        e.preventDefault();
        dispatch('cancel', e);
        value = '';
    }
</script>

<section class="comment" transition:scale={{duration:300, start:0.01}} on:click={(event)=>{
    event.stopPropagation();
}}>
    <div class="comment_author">
        <UserAvatar userName="{data.name}"/>
    </div>
    <textarea class="comment_textarea" name="comment" id="my_comment" cols="30" rows="10" bind:value={value} placeholder="Escribe tu comentario aquí..."></textarea>
    <div class="comment_buttons">
        <Button btnType="secondary-variant" on:click={handleCancel}>Cancelar</Button>
        <Button btnType="primary" on:click={handleSubmit}>Comentar</Button>
    </div>
</section>

<style>
    .comment{
        width: 100%;
        max-width: 300px;
        background-color: var(--color-white);
        border-radius: 5px;
        margin-top: 10px;
        box-shadow: var(--shadow-lv5);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: var(--z-index-lv5);
        border: 1px solid var(--color-primary);
        pointer-events: fill;
    }
    .comment_author{
        display: flex;
        padding: var(--spacing-md);
        border-bottom: 1px solid var(--color-gray-light);
    }
    .comment_textarea{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        font-size: var(--font-size-md);
        padding: var(--spacing-md);
        border-bottom: 1px solid var(--color-gray-light);
    }
    .comment_buttons{
        display: flex;
        justify-content: flex-end;
        padding: var(--spacing-md);
        gap: var(--spacing-md);
    }

</style>