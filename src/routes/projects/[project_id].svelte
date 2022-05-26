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
    import Container from '$components/Container.svelte';
    export let project;
</script>

<svelte:head>
    <title>{project.title}</title>
</svelte:head>

<section class="project">
    <div class="project_banner">
        <img src="{project.poster}" alt="{project.title}">
        <div class="project_info">
            <div class="info_text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    </div>
</section>


<style>
    .project_banner{
        height: 480px;
        position: relative;
        background-image: var(--banner-image);
    }
    .project_banner img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 50;
    }

    .project_info{
        max-width: var(--max-width);
        margin: 0 auto;
        position: relative;
        z-index: 100;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: end;
        padding-top: var(--spacing-md);
        padding-bottom: var(--spacing-md);
    }

    .info_text {
        --border-width: 4px;
        background-color: rgba(18, 37, 59,.8);
        padding: var(--spacing-md);
        position: relative;
    }
    .info_text::before, .info_text::after {
        content: "";
        position: absolute;
        height: 80px;
        width: 80px;
        border-width: var(--border-width);
        border-color: var(--color-secondary);
    }
    .info_text::before {
        left: calc(-1 * var(--border-width));
        bottom: calc(-1 * var(--border-width));
        border-left-style: solid;
        border-bottom-style: solid;
    }
    .info_text::after{
        top: calc(-1 * var(--border-width));
        right: calc(-1 * var(--border-width));
        border-right-style: solid;
        border-top-style: solid;
    }
    .info_text h2{
        font-size: 2rem;
        font-weight: var(--font-weight-bold);
        color: var(--color-white);
    }

    .info_text p{
        font-size: var(--font-size-md);
        color: var(--color-white);
    }
</style>
