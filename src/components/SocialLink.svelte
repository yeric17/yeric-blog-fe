
<script>
    export let type ="twitter";
    export let color = null;
    export let size = null;
</script>

{#if type==="twitter"}
<a class="social-icon" href="https://twitter.com/yeric17" target="_blank"><span class="icon-twitter" class:icon-color={color != null} style="--icon-color: {color}; --icon-size: {size}" class:icon-resize={size !== null}></span></a>
{:else if type==="linkedin"}
<a class="social-icon" href="https://www.linkedin.com/in/yericfonseca" target="_blank"><span class="icon-linkedin" class:icon-color={color != null} style="--icon-color: {color}; --icon-size: {size}" class:icon-resize={size !== null}></span></a>
{:else if type==="github"}
<a class="social-icon" href="https://github.com/yeric17" target="_blank"><span class="icon-github" class:icon-color={color != null} style="--icon-color: {color}; --icon-size: {size}" class:icon-resize={size !== null}></span></a>
{/if}

<style>
    .social-icon{
        --icon-color: black;
        font-size: 3em;
        text-decoration: none;
        display: inline-block;
    }
    .icon-twitter{
        color: #1da1f2;
    }
    .icon-linkedin{
        color: #0077b5;
    }
    .icon-github{
        color: #333;
    }
    .icon-twitter:hover{
        color: #00aced;
    }
    .icon-linkedin:hover{
        color: #00a0d1;
    }
    .icon-github:hover{
        color: #000;
    }
    .icon-twitter.icon-color, .icon-github.icon-color, .icon-linkedin.icon-color{
       color: var(--icon-color);
    }
    .social-icon span.icon-resize{
        font-size: var(--icon-size);
    }
</style>