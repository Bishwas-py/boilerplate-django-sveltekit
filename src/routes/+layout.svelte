<script>
    import "../styles/app.postcss";
    import "../styles/fonts/play-fair.css";
    import "../styles/fonts/combo.css";
    import "../styles/fonts/lato.css";
    import "../styles/fonts/source-sans-pro.css";
    import "../styles/fonts/inter.css";
    import "../styles/fonts/dancing-script.css";
    import "../styles/fonts/poppins.css";

    // import {page} from "$app/stores";
    import HeadScript from "$lib/scripts/HeadScript.svelte";
</script>

<HeadScript/>
<svelte:head>
<!--    <meta name="description" content="{$page.data.siteData.description}"/>-->
<!--    <meta name="keywords" content="{$page.data.siteData.keywords}"/>-->
<!--    <meta name="author" content="{$page.data.siteData.author}"/>-->
</svelte:head>

<slot/>
