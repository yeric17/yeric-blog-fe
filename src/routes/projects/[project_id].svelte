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

<h3>{project.id}</h3>
<h3>{project.title}</h3>
<h3>{project.description}</h3>
<h3>{project.link}</h3>
<h3>{project.poster}</h3>
