<script>
    export let project = {
        title: "",
        poster: "",
        tags: [],
        link: "",
    }

    const HandleLink = (e) => {
        e.preventDefault()
        window.open(project.link, "_blank")
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
            <li 
            class="card_tag_item" 
            class:game={tag === 'game'}
            class:web={tag === 'web'}
            class:frontend={tag === 'frontend'}
            class:backend={tag === 'backend'}
            class:vfx={tag === 'vfx'}
            class:ai={tag === 'AI'}
            ><a href="/projects?filter-tag={tag}">{tag}</a></li>
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
        background-color: var(--color-white);
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
        background-color: var(--color-tertiary-dark);
        
    }
    .card_title h3 {
        font-weight: 400;
        color: var(--color-white);
    }
    .card_tag_list{
        display: flex;
        padding-bottom: .5rem;
        padding-top: .5rem;
        gap: .5rem;
    }
    .card_tag_item{
        width: 100%;
        padding: .5rem 1rem;
        padding-left: 1.5rem;
        text-align: center;
        background-color: var(--color-tertiary-dark);
        border-radius: 100px;
        box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
        position: relative;
        cursor: pointer;
        color: var(--color-white);
    }
    .card_tag_item::before{
        content: "";
        position: absolute;
        top: 50%;
        left: .5rem;
        width: .5rem;
        height: .5rem;
        background-color: var(--color-white);
        border-radius: .5rem;
        transform: translateY(-50%);
        
    }
    .card_tag_item.game, .card_tag_item.vfx, .card_tag_item.ai{
        background-color: var(--color-secondary);
    }
    .card_tag_item.web, .card_tag_item.frontend{
        background-color: var(--color-primary);
    }
    .card_tag_item.backend{
        background-color: var(--color-tertiary);
    }

</style>