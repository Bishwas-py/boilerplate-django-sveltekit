<script lang="ts" >
    let script: HTMLScriptElement;

    export let enabled = false;
    export let scriptTag: HTMLScriptElement;

    $: if (enabled) {
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-175300558-8";
    }
</script>

<svelte:head>
    <script async bind:this={script}></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", "UA-175300558-8");
    </script>
</svelte:head>
