<script context="module">
    import {Auth} from "../stores/user";
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
    import TextField from '$components/forms/TextField.svelte'
    import PasswordField from '$components/forms/PasswordField.svelte'
    import Button from '$components/Button.svelte'
    import {goto} from '$app/navigation'
    let userLogin = {
        email: '',
        password: ''
    }

    function handleLogin(){
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                goto('/')
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }
</script>

<svelte:head>
	<title>Ingreso</title>
</svelte:head>

<section class="login-container">
    <div class="login-form">
        <h1 class="login_form_title">
            Ingresa con tu cuenta
        </h1>
        <p class="login_form_info">Ingresa el correo y contraseña que usaste para registrarte</p>
        <div class="input-section">
            <TextField id="user_email" bind:value={userLogin.email}>Correo electrónico</TextField>
            <PasswordField  id="user_password" bind:value={userLogin.password}>Contraseña</PasswordField>
        </div>
        <div class="button-section">
            <Button on:click={handleLogin}>Iniciar sesión</Button>
        </div>
        <div class="footer-section">
            <p>¿No tienes una cuenta? <a class="register-link" href="/register">Regístrate</a></p>
        </div>
    </div>
</section>

<style>
    .login-container{
        padding-top: var(--spacing-xxl);
    }
    .login-form{
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
    .input-section{
        width: 100%;
    }
    .login_form_title{
        font-size: var(--font-size-xxl);
        font-weight: 600;
        color: var(--color-secondary);
    }
    .login_form_info{
        font-size: var(--font-size-md);
        font-weight: 400;
        padding-bottom: var(--spacing-xl);
        border-bottom:  1px solid var(--color-gray-light);
        position: relative;
        color: var(--color-gray-dark);
    }
    .login_form_info::after{
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

    .register-link{
        color: var(--color-primary);
        text-decoration: none;
        font-weight: 500;
    }
</style>