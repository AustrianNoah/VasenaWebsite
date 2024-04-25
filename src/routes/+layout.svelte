<script>
    import '../app.postcss';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title
    >{$page.url.pathname == '/'
        ? 'Home'
        : $page.url.pathname.substring(1).charAt(0).toUpperCase() +
        $page.url.pathname.substring(1).slice(1)} - BedrockPlay.fun</title
    >
    <meta property="og:type" content="profile" /><meta
        property="og:url"
        content="https://luriax-website.vercel.app/"
/><meta property="og:title" content="BedrockPlay.fun" /><meta
        property="og:description"
        content="Dein Minecraft Server!"
/><meta property="og:image" content="https://luriax-website.vercel.app//favicon.png" /><meta
        name="theme-color"
        content="#fef500"
/>
</svelte:head>

<div class="text-main font-albert flex w-full flex-col bg-background min-h-screen">
    <slot />
</div>