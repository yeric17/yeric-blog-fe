
<script>
    export let type ="twitter";
</script>

{#if type==="twitter"}
<a class="social-icon" href="https://twitter.com/yeric17" target="_blank"><span class="icon-twitter"></span></a>
{:else if type==="linkedin"}
<a class="social-icon" href="https://www.linkedin.com/in/yericfonseca" target="_blank"><span class="icon-linkedin"></span></a>
{:else if type==="github"}
<a class="social-icon" href="https://github.com/yeric17" target="_blank"><span class="icon-github"></span></a>
{/if}

<style>
    .social-icon{
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

</style>