<script>
    import {onMount} from 'svelte'
    import {addNotification} from '$stores/notifications';
    import {createEventDispatcher} from 'svelte';
    const dispacher = createEventDispatcher();

    export let apiUrl = '';
    export let id = 'my-area';
    export let awaitUpload = false;
    export let complementUrl = null;
    export let fileUrl = [];
    export let method = 'POST';
    export let fileName = 'file';
    let tempUrl = [];




    
    let hover = false;
    let input = null;
    let form = null;

    const fileTypes = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/gif': 'gif',
        'image/svg+xml': 'svg',
        'text/plain': 'txt',
        'application/pdf': 'pdf',
        'application/msword': 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'text/csv': 'csv',
    }

    onMount(() => {
        input = document.getElementById(id);
        form = input.parentNode;
    })

    async function handleSubmit(event){
        event.preventDefault();
        
        let reader = new FileReader();

        reader.onload = function(e) {
            tempUrl.push(e.target.result);
            dispacher('dummy', tempUrl);
        }

        //each input.files
        for(let i = 0; i < input.files.length; i++){
            let file = input.files[i];
            reader.readAsDataURL(file);
        }


        if(!awaitUpload){

            let response = await fetch(getUrl(), {
                method: method,
                body: new FormData(form),
                // headers: {
                //     'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
                // }
            });

            let json = await response.json();

            if(json.code === 200){
                addNotification({message: 'file uploaded', type: 'success', duration: 2000});
                fileUrl = json.data;
                dispacher('uploaded', fileUrl);
            }
            else{
                addNotification({message: 'file did not upload', type: 'error', duration: 2000});
            }
        }
        else{
            const callback =  async function (complement) {
                let response = await fetch(fileUrl + complement, {
                    method: method,
                    body: new FormData(form),
                    // headers: {
                    //     'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'
                    // }
                });

                let json = await response.json();

                if(json.code === 200){
                    addNotification({message: 'file uploaded', type: 'success', duration: 2000});
                    fileUrl = json.data;
                    dispacher('uploaded', fileUrl);
                }
                else{
                    addNotification({message: 'file did not upload', type: 'error', duration: 2000});
                }
                return json;
            }

            dispacher('uploading', callback);
        }
        
    }

    function getUrl(){
        if(complementUrl){
            return apiUrl + complementUrl;
        }
        return apiUrl;
    }

    function handleChange(event){
        form.dispatchEvent(new Event('submit'));
    }

    function handleDrop(event){
        input.files = event.dataTransfer.files;
        input.dispatchEvent(new Event('change'));
        hover = false;
    }
</script>

<form class="drop-area_form" enctype="multipart/form-data" on:submit|preventDefault={handleSubmit}  method="POST" on:click={(event)=>{
        event.stopPropagation();
        
    }}>
    <input id="{id}" class="input-file" type="file" name="file" on:change|preventDefault={handleChange} />
    <label for="{id}" class="drop-area {hover?'hover':''}" on:dragenter|preventDefault={()=>hover=true} on:dragover|preventDefault={()=>hover=true} on:dragleave|preventDefault={()=>hover=false} on:drop|preventDefault={handleDrop}>
        <div class="drop-area_text">
            <span>Arrastre y suelte archivos aquí, o de clic <span class="icon-text">&#xe912;</span></span>
        </div>
    </label>
</form>

<style>
    .drop-area_form {
        width: 100%;
        height: 100%;
    }
    .drop-area {
        border: 2px dashed rgb(117, 117, 117);
        text-align: center;
        padding: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: inherit;
        position: relative;
    }
        
    .drop-area_text {
        font-size: 1.2em;
        color: rgb(58, 58, 58);
        margin-bottom: 10px;
    }
    .input-file {
        display: none;
    }

    .drop-area.hover {
        border: 2px dashed rgb(41, 41, 41);
    }

    .icon-text {
        
        color: var(--primary-dark);
        font-family: 'icons';
        bottom: 2rem;
        left: 50%;
        transform: translateX( -50%);
        font-size: 1.1em;

    }
</style>