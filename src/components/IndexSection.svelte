<script>
    export let title = "No Title";
    export let color = "primary";
</script>
<style>
    .index-section {
        background-color: var(--color-gray);
        position: relative;
    }
    .section_title{
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
        height: 40px;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .section_title h2{
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--color-primary-text);
        max-width: 360px;
        width: 100%;
        border-radius: 20px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 20;
        bottom: 0;
    }
    .section_title.primary h2{
        background-color: var(--color-primary);
    }
    .section_title.secondary h2{
        background-color: var(--color-secondary);
    }
    .section_title.tertiary h2{
        background-color: var(--color-tertiary);
    }
    .section_title h2::before{
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 38px;
        width: 38px;
        border-radius: 50%;
        transform: translateY(-50%);
    }
    .section_title.primary h2::before{
        content: "A";
        right: 0;
        border: 1px solid white;
    }
    .section_title.secondary h2::before{
        content: "X";
        left: 0;
        border: 1px solid white;
    }
    .section_title.tertiary h2::before{
        content: "Y";
        right: 0;
        border: 1px solid white;
    }
    .section_title::before{
        content: "";
        position: absolute;
        top: 50%;
        width: 50%;
        height: 2px;
        z-index: 10;
        transform: translateY(-50%);
    }
    .section_title.primary::before{
        background-color: var(--color-primary);
        left: 0;
    }
    .section_title.secondary::before{
        background-color: var(--color-secondary);
        right: 0;
    }
    .section_title.tertiary::before{
        background-color: var(--color-tertiary);
        left: 0;
    }
    .section_content{
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .section_content.primary{
        background-color: var(--color-tertiary);
        color: var(--color-tertiary-text);
    }
    .section_content.secondary{
        background-color: var(--color-gray-dark);
        color: var(--color-gray-text);
    }
    .section_content.tertiary{
        background-color: var(--color-secondary);
        color: var(--color-secondary-text);
    }
</style>
<section class="index-section">
    <div class="section_container">
        <div class="section_title {color}">
            <h2>{title}</h2>
        </div>
        <div class="section_content {color}">
            <slot></slot>
        </div>
    </div>
</section>