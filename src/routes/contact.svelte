
<script>
    import TextField from '$components/forms/TextField.svelte'
    import TextArea from '$components/forms/TextArea.svelte'
    import Button from '$components/Button.svelte'
    import {addNotification} from '$stores/notifications'
    import {API_HOST} from "$stores/config";

    let formData = {
        email: '',
        name: '',
        message: ''
    }

    let formSuccess = {
        email: false,
        name: false,
        message: false
    }

    let errorMessage = false
    async function handleSubmit(){

        if(!formSuccess.email || !formSuccess.name || !formSuccess.message){
            errorMessage = 'Por favor llene todos los campos'
            return
        }
        console.log(formData)
        errorMessage = false

        let response = await fetch(`api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        let json = await response.json()

        if(json.success){
            formData = {
                email: '',
                name: '',
                message: ''
            }
            formSuccess = {
                email: false,
                name: false,
                message: false
            }
            addNotification({
                type: 'success',
                message: 'Mensaje enviado',
                duration: 5000
            })
        }else{
            addNotification({
                type: 'error',
                message: 'Ocurrió un error',
                duration: 5000
            })
            errorMessage = json.message
        }

    }
</script>

<svelte:head>
	<title>Contacto</title>
</svelte:head>


<section class="contact-container">
    <form class="contact-form" on:submit|preventDefault={handleSubmit}>
        <h1 class="contact-form_title">Contacto</h1>
        <p class="contact-form_info">Muchas gracias, aprecio mucho tu interes en querer contactarme.</p>
        <div class="contact-form_input-section">
            <TextField id="contactEmail" bind:success={formSuccess.email} validated={true} bind:value={formData.email}>Correo electrónico</TextField>
            <TextField id="contactName" bind:success={formSuccess.name} validated={true} bind:value={formData.name}>Nombre</TextField>
            <TextArea id="contactMessage" bind:success={formSuccess.message} bind:value={formData.message}>Mensaje</TextArea>
        </div>
        <div class="contact-form_button">
            <Button on:click={handleSubmit}>Enviar</Button>
        </div>
        <div class="contact-form_footer">
            {#if errorMessage}
                <p class="error">{errorMessage}</p>
            {/if}
        </div>
    </form>
</section>

<style>
    .contact-container {
        max-width: 600px;
        margin: 0 auto;
        padding-top: var(--spacing-xl);
        padding-bottom: var(--spacing-xl);
    }
    .contact-form {
        background-color: var(--color-tertiary);
        
        padding: var(--spacing-xl) var(--spacing-xxl);
        border-radius: 10px;   
    }
    .contact-form_button {
        padding-top: var(--spacing-lg);
    }
    .contact-form_title, .contact-form_info {
        color: var(--color-primary-text);
        font-weight: var(--font-weight-bold);
    }
    .contact-form_info{
        padding-top: var(--spacing-md);
    }
    .error{
        color: var(--color-danger);
    }
</style>