<script context="module">
    import {API_HOST} from "$stores/config";
    export const load = async ({url}) =>{
        let response = await fetch(`${API_HOST}/projects`);
        let projects = await response.json();
        const filterTag = url.searchParams.get('filter-tag');

        if (filterTag) {
            projects = projects.filter(project => project.tags.includes(filterTag));
        }
        if(filterTag){
            return {
                props:{
                    projects
                }
            }
        }
        return {
            props:{
                projects
            }
        }
    }
</script>

<script>
    import Container from '$components/Container.svelte';
    import Gallery from '$components/Gallery.svelte';
    import ProjectCard from '$components/ProjectCard.svelte';

    export let projects;
</script>

<Container>
    <section class="projects">
        <h2>Proyectos</h2>
        <Gallery>
            {#each projects as project}
                <ProjectCard project={project} />
            {/each}
        </Gallery>
    </section>
</Container>