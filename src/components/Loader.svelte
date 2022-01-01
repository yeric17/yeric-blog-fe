
<div class="loader">

</div>

<style>
    .loader {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background-color: white;
    }
    .loader:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 50px;
        height: 50px;
        margin-left: -25px;
        margin-top: -25px;
        border-radius: 50%;
        border: 5px solid #d1d1d1;
        border-top-color: var(--color-primary);
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>