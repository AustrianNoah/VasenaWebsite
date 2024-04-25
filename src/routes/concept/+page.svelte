<script>
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="flex flex-col ">
    <div class="flex min-h-screen flex-col">
        <Navbar />
        <!-- concept start -->
        <div class="radial-bg p-x grow justify-center py-16">
            <div class="mx-auto text-center flex flex-col">
                <h1 class="mb-3 text-4xl font-bold sm:text-8xl">Konzept</h1>
                <p>Content</p>
            </div>
        </div>
        <!-- concept end -->
    </div>
    <Footer />
</div>