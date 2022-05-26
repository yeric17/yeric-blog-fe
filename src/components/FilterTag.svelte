
<script>
    export let tag;
</script>

<li 
class="card_tag_item" 
class:game={tag === 'game'}
class:web={tag === 'web'}
class:frontend={tag === 'frontend'}
class:backend={tag === 'backend'}
class:vfx={tag === 'vfx'}
class:ai={tag === 'AI'}
class:all={tag === 'all'}
><a href="{tag != 'all'?'/projects?filter-tag='+tag:'/projects'}">{tag}</a></li>

<style>
    .card_tag_item{
        width: 100%;
        text-align: center;
        background-color: var(--color-tertiary-dark);
        border-radius: 100px;
        position: relative;
        cursor: pointer;
        color: var(--color-white);
        overflow: hidden;
        width: auto;
    }
    .card_tag_item a{
        display: block;
        max-width: 100px;
        width: 100%;
        padding: .5rem 1rem;
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