<script>
    export let content = null;
</script>

{#if content.type === 'text'}
    <p class="post-page_text">{@html content.value}</p>
{/if}
{#if content.type === 'image'}
    <div class="post-page_image-container">
        <img class="post-page_image" src={content.value} alt="postimage" />
    </div>
{/if}
{#if content.type === 'subtitle'}
    <h2 class="post-page_subtitle">{content.value}</h2>
{/if}
{#if content.type === 'code'}
    <pre class="post-page_code">
        <code>
            {content.value}
        </code>
    </pre>
{/if}