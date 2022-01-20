<svelte:head>
	<title>Crear Post</title>
</svelte:head>

<script>
    

    import {API_HOST} from "$stores/config";
    import {user} from "$stores/user";
    import TextField from "$components/forms/TextField.svelte";
    import TextArea from "$components/forms/TextArea.svelte";
    import DropDown from "$components/forms/DropDown.svelte";
    import ParseContent from "$components/ParseContent.svelte";
    import DropArea from "$components/DropArea.svelte";
    import Button from "$components/Button.svelte";

    let contentTypes = [
        "text",
        "subtitle",
        "image",
        "code",
    ];
    let codeLangs = [
        "html",
        "css",
        "js",
        "php",
        "sql",
        "json",
        "xml",
        "bash",
        "c",
        "cpp",
        "csharp",
        "go",
        "java",
        "kotlin",
        "lua",
        "objective-c",
        "perl",
        "python",
        "ruby",
        "rust",
        "scala",
        "swift",
        "typescript",
    ];

    let imageCallback = null;
    let imagePostCallback = null;

    let currImageName = null;
    let postImageDummy = null;

    let post = {
        title:"",
        content:[],
        image:null,
    };

    let content = {
        type:null,
        value:null,
        lang:"es",
        codelang:null,
        id:null,
        order:null,
    };

    function randomID() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    async function addContent(event){
        event.preventDefault();
        content.id = randomID();
        content.order = post.content.length;
    
        if(imageCallback){
            content.value =  await imageCallback();
        }
        post.content = [...post.content, {...content}];
        content.value = null;
        content.type = null;
        imageCallback = null;
        console.log({post});
    }

    function addImage(event){
        imageCallback = event.detail
    }
    function addPostImage(event){
        imagePostCallback = event.detail
    }

    function dummyImage(event){
        content.value = event.detail;
    }

    function dummyPostImage(event){
        postImageDummy = event.detail;
    }

    async function savePost(event){
        event.preventDefault();
        if(imagePostCallback){
            post.image = await imagePostCallback();
        }
        imagePostCallback = null;
        post.content = JSON.stringify(post.content).trim();
        post.author_id = $user.id;
        fetch(`${API_HOST}/posts`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then(res => res.json()).then(res => {
            console.log(res);
        });
    }
    
</script>

<section class="addpost">
    <form class="addpost_form">
        <TextField bind:value={post.title}>Titulo</TextField>
        {#if postImageDummy}
                <img src={postImageDummy} alt="{currImageName}"/>
        {:else}
            <DropArea awaitUpload={true} apiUrl={`${API_HOST}/posts/upload?name=${post.title}`} on:uploading={addPostImage}  on:dummy-image={dummyPostImage}>Ingrese la imagen del banner del post aquí</DropArea>
        {/if}
        <DropDown options={contentTypes} bind:value={content.type}>Tipo</DropDown>
        {#if content.type === "text" || content.type === "code"}
            <TextArea bind:value={content.value}>Contenido</TextArea>
        {/if}
        {#if content.type === "code"}
            <DropDown options={codeLangs} bind:value={content.codelang}>Lenguaje</DropDown>
        {/if}
        {#if content.type === "subtitle"}
            <TextField bind:value={content.value}>Sub titulo</TextField>
        {/if}
        {#if content.type === "image"}
            <TextField bind:value={content.value}>Nombre de la Imagen</TextField>
            {#if content.value}
                <img src={content.value} alt="{currImageName}"/>
            {:else}
            <DropArea awaitUpload={true} apiUrl={`${API_HOST}/posts/upload?name=${currImageName}`} on:uploading={addImage}  on:dummy-image={dummyImage}>Ingrese la imagen aquí</DropArea>
            {/if}
        {/if}
        <Button btnType="secondary" on:click={addContent}>Agregar</Button>
        {#each post.content as content}
            <ParseContent content={content}></ParseContent>
        {/each}
        <Button on:click={savePost}>Guardar Post</Button>
    </form>
</section>

<style>
    .addpost{
        max-width:var(--max-width);
        margin:0 auto;
    }
</style>