<script context="module">
    import {API_HOST} from "$stores/config";
    export const load = async ({params}) =>{
        
        let {project_id} = params;

        let JSONproject = await fetch(`${API_HOST}/projects?id=${project_id}`);

        let project = await JSONproject.json();

        return {
            props:{
                project
            }
        }
    }
</script>

<script>
    export let project;
</script>

<svelte:head>
    <title>{project.title}</title>
</svelte:head>

<section class="project">
    <div class="project_banner">
        <img src="{project.poster}" alt="{project.title}">

        <h2>{project.title}</h2>
        <p>{project.description}</p>
    </div>
</section>


<style>
    .project_banner{
        height: 480px;
        position: relative;
    }
    .project_banner img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project_banner h2{
        position: absolute;
        top: 3rem;
        left: 4rem;
        font-size: 2rem;
        font-weight: 500;
        color: var(--color-primary);
        background-color: var(--color-tertiary-dark);
        padding: 2rem 2rem;
        border: 4px solid var(--color-secondary);
        text-shadow: 0 0 2px var(--color-primary);
    }
</style>
