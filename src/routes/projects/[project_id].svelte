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
    <div class="project_content">
        
        <Container>
            {#each project.sections as section}
                <article class="content_section">
                    <h3>{section.title}</h3>
                    {#if section.items != null && section.items != undefined}
                    <div class="section_items">
                        {#each section.items as item, idx}
                            <div class="section_item">
                                {#if item.type == "image"}
                                    <img class="section_item_image"  src="{item.value}" alt="{item.value}">
                                {/if}
                                {#if item.type == "text"}
                                    <p class="section_item_text" >{@html item.value}</p>
                                {/if}
                                {#if item.type == "list"}
                                    <ul class="section_item_list">
                                        {#each item.value as listItem}
                                            <li class="section_item_list_item">{listItem}</li>
                                        {/each}
                                    </ul>
                                {/if}
                                {#if item.type == "video"}
                                    <div class="section_item_video">
                                        <iframe title="video_gameplay" width="560" height="315" src="{item.value}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                {/if}
                                {#if item.type == "subtitle"}
                                    <h4 class="section_item_subtitle">{item.value}</h4>
                                {/if}

                            </div>
                        {/each}
                    </div>
                    {/if}
                </article>
            {/each}
        </Container>

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
        max-width: 75ch;
        margin: 0 auto;
        position: relative;
        z-index: 100;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        align-items: end;
        padding-top: var(--spacing-lg);
        padding-bottom: var(--spacing-lg);
        padding-left: 2rem;
        
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
    .project_content{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .content_section{
        margin-bottom: var(--spacing-xl);
    }
    .content_section h3{
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--color-secondary);
        margin-bottom: var(--spacing-xl);
        text-align: center;
    }
    .section_items{
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;
    }
    .section_item{
        max-width: 75ch;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        font-size: 1rem;
    }
    .section_item_image{
        width: 100%;
        display: block;
        border: 1px solid var(--color-gray);
        border-radius: 8px;
        max-height: 400px;
        object-fit: cover;
        object-position: top;
    }
    .section_item_text{
        width: 100%;
    }
    .section_item_list{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-self: flex-start;
        gap: 1rem;
    }
    .section_item_list_item{
        display: flex;
        align-items: center;
    }
    .section_item_list_item::before{
        content: "";
        width: 1rem;
        height: 1rem;
        border: 2px solid var(--color-primary-dark);
        box-sizing: border-box;
        margin-right: 1rem;
        background-color: var(--color-primary);
        display: inline-flex;
        align-content: center;
        justify-content: center;
    }
    p{
        margin: 0;
    }
    .section_item_subtitle{
        font-size: 1.3rem;
        color:rgba(0, 0, 0,.6)
    }
    @media  (min-width: 768px){
        .section_items{
            grid-template-columns: 1fr;
        }
        .project_info{
            padding-left: 0;
        }
    }
</style>
