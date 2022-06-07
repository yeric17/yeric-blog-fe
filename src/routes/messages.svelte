<script context="module">

    export const load = async ({fetch, session}) =>{
        let response = await fetch(`api/contact`);
        let user = session.user;
        let json = await response.json();
        let contacts = json.data.reverse();
        
        
        if(user.role_id !== 1){
            return {
                status: 302,
                redirect: "/"
            }
        }
        return {
            props:{
                contacts
            }
        }
    
    }
</script>

<script>
    import Container from '$components/Container.svelte'
    import Button from '$components/Button.svelte'
    export let contacts = [];

    async function handleDelete(id){
        const response = await fetch(`/api/contact?id=${id}`, {
            method: 'DELETE'
        })
        console.log(response)
        const json = await response.json();
        if(json.success){
            contacts = contacts.filter(contact => contact.id !== id)
        }
    }
</script>

<div class="messages">
    <Container>
        <ul class="messages_list">
            {#each contacts as contact}

                <div class="message_item">
                    <div class="message_from">
                        <span class="message_author">{contact.name}</span>
                        <span class="message_email">{contact.email}</span>
                        <div class="button_delete_container">
                            <span class="icon-trash" on:click={handleDelete(contact.id)}></span>
                        </div>
                    </div>
                    <span class="message_content">{contact.message}</span>
                </div>
            {/each}
        </ul>
    </Container>

</div>

<style>
    .messages_list{
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .message_from{
        display: flex;
        background-color: var(--color-gray);
        gap: 1rem;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid var(--color-gray-dark);
        padding: 1rem;
        padding-right: 3rem;
        position: relative;
    }
    .message_author{
        background-color: var(--color-secondary);
        color: var(--color-white);
        padding: 0.5rem;
        border-radius: 5px;
    }
    .message_email{

        color: var(--color-secondary);
        padding: 0.5rem;
        border-radius: 5px;
    }
    .message_content{
        display: block;
        background-color: white;
        padding: 1rem;
    }
    .button_delete_container{
        position: absolute;
        top: .5rem;
        right: .5rem;
        width: 1.5rem;
        height: 1.5rem;
    }
    .icon-trash{
        padding: 1px;
        font-size: 1rem;
        background-color: var(--color-primary);
        color: var(--color-white);
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }
</style>