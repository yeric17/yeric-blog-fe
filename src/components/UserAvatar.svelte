<script>
    export let userName = "No name";
    export let userAvatar = "http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg";
</script>


<div class="avatar">
    <img class="avatar_image" src="{userAvatar}" alt="">
    <span class="avatar_name">{userName}</span>
    
</div>

<style>
    .avatar {
        display: flex;
        align-items: center;
    }

    .avatar_image {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        object-fit: cover;
    }

    .avatar_name {
        color: inherit;
        padding-left: var(--spacing-sm);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 130px;
    }
</style>