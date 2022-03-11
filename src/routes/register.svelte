<script context="module">
    export const load = async function({session}){
        if(session.user && session.user.authenticated){
            return {
                status: 302,
                redirect: "/"
            }
        }
        return {
            status: 200,
        }
    }
</script>
<script>

    import {Register} from '$stores/user';

    //Svelte components
    import Header from '$components/Header.svelte'
    import TextField from '$components/forms/TextField.svelte'
    import Button from '$components/Button.svelte'
    import PasswordField from '$components/forms/PasswordField.svelte'

    let registerUser = {
        name: '',
        email: '',
        password: '',
        status: 'active',
        role_id: 2,
    }

    let inputStatus = {
        name: false,
        email: false,
        password: false,
    }
    let errorMessage = null
    let successMessage = null
    function Validate(){
        let valid = true;
        Object.keys(inputStatus).forEach(key => {
            if(!inputStatus[key]){
                valid = false;
                errorMessage = 'Por favor, llene todos los campos.'
            }
        })
        return valid;
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(Validate()){
            
            let response = await Register(registerUser);

            if(response){
                successMessage = 'Usuario registrado con éxito.'
                setTimeout(() => {
                    successMessage = null
                    window.location.href = '/login'
                }, 2000);
                return
            }
            errorMessage = 'El usuario ya existe.'
        }
    }
</script>
<svelte:head>
	<title>Registro</title>
</svelte:head>

<section class="register-container">
    <section class="register_form">
        <h1 class="register_form_title">
            Crea una cuenta
        </h1>
        <p class="register_form_info">Es necesario contar con una cuenta para interactuar en el Blog</p>
        <div class="inputs-section">
            <div class="input_name">
                <TextField id="user_name" bind:value={registerUser.name} validated={true} bind:success={inputStatus.name}>Nombre de Usuario</TextField>
            </div>
            <div class="input_email">
                <TextField id="user_email" bind:value={registerUser.email} validated={true} pattern={
                    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
                } bind:success={inputStatus.email}>Email</TextField>
            </div>
            <div class="input_password">
                <PasswordField id="user_password" bind:value={registerUser.password} validated={true} bind:success={inputStatus.password}
                pattern={
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}).*$'
                }>Contraseña</PasswordField>
                
            </div>
        </div>
        <div class="button-section">
            <Button on:click={handleSubmit}>Registrarme</Button>
        </div>
        {#if errorMessage}
        <div class="errors-section"> 
            <span class="icon-info-circle"></span>
            <span>{errorMessage}</span>
        </div>
        {/if}
        {#if successMessage}
        <div class="success-section">
            <span class="icon-tick-square1"></span>
            <span>{successMessage}</span>
        </div>
        {/if}
    </section>
</section>



<style>
    .register-container{
        padding-top: var(--spacing-xxl);
    }
    .register_form{
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-sm);
        justify-items: center;
        max-width: 360px;

        margin: 0 auto;
        border-radius: 5px;
        padding: var(--spacing-md);
        padding-bottom: var(--spacing-xl);
        padding-left : var(--spacing-xl);
        padding-right : var(--spacing-xl);
        background-color: rgb(248, 248, 248);
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1),
                   0 2px 0 0 rgb(248, 248, 248),
                   inset 0 0 1px 2px rgba(255, 255, 255, 0.8);
    }
    .inputs-section{
        width: 100%;
    }
    .errors-section{
        color: var(--color-white);
        background-color: var(--color-danger);
        padding: var(--spacing-md);
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        font-weight: 400;
    }
    .success-section{
        color: var(--color-white);
        background-color: var(--color-success);
        padding: var(--spacing-md);
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        font-weight: 400;
    }
    .icon-info-circle{
        margin-right: var(--spacing-md);
    }
    .icon-tick-square1{
        margin-right: var(--spacing-md);
    }
    .register_form_title{
        font-size: var(--font-size-xxl);
        font-weight: 600;
        color: var(--color-secondary);
    }
    .register_form_info{
        font-size: var(--font-size-md);
        font-weight: 500;
        padding-bottom: var(--spacing-xl);
        border-bottom:  1px solid var(--color-gray-light);
        position: relative;
        color: var(--color-gray-dark);
    }
    .register_form_info::after{
        content: '';
        display: block;
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-right: 1px solid var(--color-gray-light);
        border-bottom: 1px solid var(--color-gray-light);
        background-color: var(--color-gray-light);
        margin-top: var(--spacing-md);
        left: 50%;
        bottom: 0;
        transform: translate(-50%, calc(50% + .5px)) rotate(45deg);
        transform-origin: center;
        box-shadow: .5px .5px 0 1px rgba(0, 0, 0, 0.1),
                    .5px .5px 0 1px var(--color-gray-light),
                    inset 0 0 1px 1px rgba(255, 255, 255, 0.8);

    }
    .button-section{
        padding-top: var(--spacing-lg);
    }
</style>
