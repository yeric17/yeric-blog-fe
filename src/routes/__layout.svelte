
<script context="module">
    import {Auth} from "$stores/user";
    export const load = async function(){
        let isAuth = await Auth();
        if(isAuth){
            return {
                authendication: true
            }
        }
        return {
            authendication: false
        }
    }
</script>


<script>
    import Header from '../components/Header.svelte';
    import '../css/fonts.css';
    import '../css/forms.css';
    import '../css/icons.css';
    import '../css/variables.css';
    import '../css/global.css';

</script>

<Header></Header>

<main class="main">
    <slot></slot>
</main>

