<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="flex flex-col ">
    <div class="flex min-h-screen flex-col">
        <Navbar />
        <!-- branding start -->
        <div class="flex p-4">
            <div class="flex flex-col gap-4">
                <h1 class="text-center text-4xl font-bold">Logo</h1>
                <div class="w-32 h-32 border border-white/5">
                    <img src="/favicon.png" alt="" />
                </div>
            </div>
        </div>
        <!-- branding end -->
    </div>
    <Footer />
</div>