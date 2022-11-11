<script>
  import GoogleAdsense from "./adsense.svelte";
  import GoogleAnalytics from "./analytics.svelte";

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let enabled;
  onMount(() => {
    enabled = true;
  });
</script>

<svelte:head>
  <meta property="fb:app_id" content="773982076697264">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{$page.url}">
  <meta property="og:site_name" content="Webmatrices Apps">
  <meta property="og:locale" content="en_US">
  <meta property="og:image:width" content="1080">
  <meta property="og:image:height" content="1920">
  <meta property="og:image:type" content="image/png">
  <meta name="author" content="Bishwas Bhandari (Webmatrices, @bishwasbh)">

  <GoogleAnalytics {enabled} />
</svelte:head>
