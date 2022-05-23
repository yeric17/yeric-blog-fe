<script>
    export let topic = "";
</script>

<article class="topic-card">
    <div class="topic-card_image">
    {#if topic == "games"}
        <a href="/projects?filter-tag=game"><img src="./Section GAMES.svg" alt=""></a>
    {:else if topic == "frontend"}
        <a href="/projects?filter-tag=frontend"><img src="./Section WEB.svg" alt=""></a>
    {:else if topic == "backend"}
        <a href="/projects?filter-tag=backend"><img src="./Section WEB Backend.svg" alt=""></a>
    {/if}
    </div>
</article>

<style>
    .topic-card{
        position: relative;
        top: 0;
        filter: saturate(.5);
        transition: all 0.5s;
        cursor: pointer;
    }

    .topic-card:hover{
        top: -10px;
        filter: saturate(1);
    }
</style>