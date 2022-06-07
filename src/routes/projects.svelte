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
    import FilterTag from "$components/FilterTag.svelte";

    export let projects;
</script>


<section class="projects">
    <div class="projects_title">
        <h2>
            Proyectos
        </h2>
    </div>
    <div class="projects_filter">
        <Container>
            <ul class="projects_filter_list">
                <FilterTag tag="all" />
                <FilterTag tag="game"/>
                <FilterTag tag="web"/>
                <FilterTag tag="frontend"/>
                <FilterTag tag="backend"/>
            </ul>
        </Container>
    </div>
    <div class="gallery_container">
        <Container>
            <Gallery minwidth="200px" maxwidth="1fr">
                {#each projects as project}
                    <ProjectCard project={project} />
                {/each}
            </Gallery>
        </Container>
    </div>
</section>


<style>
    .projects_title{
        text-align: center;
        padding: 2rem 0;
        color: var(--color-black);
        border-bottom: 2px solid var(--color-primary);
        margin: 0 auto;
    }
    .projects_title h2{
        font-size: 2rem;
        font-weight: 700;
    }
    .gallery_container{
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: var(--color-tertiary-light);
    }
    .projects_filter{
        background-color: var(--color-tertiary-dark);
    }
    .projects_filter_list{
        display: flex;
        gap: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>