
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
        box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
        position: relative;
        cursor: pointer;
        color: var(--color-white);
        max-width: 100px;
    }
    .card_tag_item a{
        padding: .5rem 1rem;
        padding-left: 1.5rem;
        display: block;
        width: 100%;
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