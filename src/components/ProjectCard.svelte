<script>
    import FilterTag from '$components/FilterTag.svelte';
    import {goto} from "$app/navigation"

    export let project = {
        title: "",
        poster: "",
        tags: [],
        link: "",
    }
    const HandleLink = (e) => {
        e.preventDefault()
        
        goto(project.link)
    }
</script>


<article class="project-card">
    <div class="card_poster" on:click={HandleLink}>
        <img src="{project.poster}" alt="poster {project.title}">
    </div>
    <div class="card_title">
        <h3>{project.title}</h3>
    </div>
    <div class="card_tags">
        <ul class="card_tag_list">
            {#each project.tags as tag}
                <FilterTag tag={tag} />
            {/each}
        </ul>
    </div>
</article>

<style>
    .project-card {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 250px 1fr 1fr;
        justify-items: center;
        background-color: var(--color-tertiary-light);
        align-items: start;
        box-sizing: border-box;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
        position: relative;
        top: 0;
        transition: all 0.3s ease-in-out;
    }
    .project-card:hover {
        top: -1rem;
    }
    .card_poster{
        height: 100%;
        overflow: hidden;
        cursor: pointer;
    }
    .card_poster img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .card_title{
        width: 100%;
        padding: 1rem;
        
        text-align: center;
        background-color: var(--color-white);
        
        
    }
    .card_title h3 {
        font-weight: 400;
        color: var(--color-black);
    }
    .card_tags{
        width: 100%;
    }
    .card_tag_list{
        display: flex;
        background-color: var(--color-white);
        padding-bottom: .8rem;
        padding-top: .5rem;
        padding-left: .5rem;
        padding-right: .5rem;
        gap: .5rem;
        width: 100%;
    }

</style>