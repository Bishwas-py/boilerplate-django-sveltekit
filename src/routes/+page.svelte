<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import {page} from "$app/stores";

    import HomePageNavBar from "$lib/home-components/nav/NavBar.svelte";
    import Header from "$lib/home-components/header/Header.svelte";
    import Section from "$lib/home-components/section/Section.svelte";
    import {faCircleDot} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import Content from "$lib/home-components/content/Content.svelte";
    import Footer from "$lib/footer/Footer.svelte";
</script>

<svelte:head>
    <title>{$page.data.siteData.title} | {$page.data.siteData.subtitle}</title>
</svelte:head>


<HomePageNavBar/>
<Header/>
<Section/>
<Content/>
<Footer/>
