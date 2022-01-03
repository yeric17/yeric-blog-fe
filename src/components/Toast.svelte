<script>
    const notificationTypes = {
        success: 'success',
        error: 'error',
        warning: 'warning',
        info: 'info'
    };
    export let type = notificationTypes.success;
</script>


<div class="notification {type}">
    <div class="notification-icon">
        {#if type === notificationTypes.success}
            &#xe920;
        {:else if type === notificationTypes.error}
            &#xe909;
        {:else if type === notificationTypes.warning}
            &#xe918;
        {:else if type === notificationTypes.info}
            &#xe90f;
        {/if}
    </div>
    <div class="notification-text">
        {#if $$slots.description}
        <slot name="description">
        </slot>
        {:else}
        <span>Defaul text</span>
        {/if}
    </div>
</div>

<style>
    .notification{
        display: flex;
        padding: .8rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-lv5);
        position: relative;
        transition: all .3s ease;
        z-index: var(--z-index-lv6);
        min-width: 200px;
        max-width: 500px;
        align-items: center;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        background-color: var(--color-white);
    }

    .notification-icon{
        font-family: 'icons';
        margin-right: .5rem;
        color: var(--text-info);
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }
    .notification.error{
        border-color: var(--color-danger);
    }
    .notification.warning{
        border-color: var(--color-warning);
    }
    .notification.success{
        border-color: var(--color-success);
    }
    .notification.info{
        border-color: var(--color-info);
    }


    .notification.success .notification-icon{
        color: var(--color-success);
    }
    .notification.error .notification-icon{
        color: var(--color-danger);
        
    }
    .notification.warning .notification-icon{
        color: var(--color-warning-dark);
        
    }
    .notification.info .notification-icon{
        color: var(--color-info);
        
    }
</style>