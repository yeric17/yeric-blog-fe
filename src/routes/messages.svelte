<script context="module">
    import {API_HOST} from "$stores/config";
    export const load = async ({fetch}) =>{
        let response = await fetch(`api/contact`);
        console.log(response)
        let data = await response.json();
        let contacts = data.data;

        return {
            props:{
                contacts
            }
        }
    
    }
</script>

<script>
    import Container from '$components/Container.svelte'
    export let contacts = [];
</script>

<div>
    <Container>
    {#each contacts as contact}
        <div>
            <h5>{contact.name}</h5>
            <p>{contact.email}</p>
            <p>{contact.message}</p>
        </div>
    {/each}
    </Container>

</div>