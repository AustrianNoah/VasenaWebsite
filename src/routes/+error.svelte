<script>
    import '../app.postcss';

    import { page } from '$app/stores';
</script>

<div class="flex radial-bg justify-center items-center h-screen">
    <h1 class="text-4xl font-bold sm:text-8xl">{$page.status}: {$page.error?.message}</h1>
</div>