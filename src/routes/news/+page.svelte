<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import NewsCard from '$lib/NewsCard.svelte';
    type item = {
        title: string;
        description: string;
        date: string;
        author: string;
        '@expand': {
            author: {
                name: string;
            };
        };
    };
    type data = {
        data: item[];
    };
    export let data: data;
</script>

<div class="flex flex-col ">
    <div class="flex min-h-screen flex-col">
        <Navbar />
        <!-- concept start -->
        <div class="radial-bg p-x grow justify-center py-16">
            <div class="mx-auto flex flex-col">
                <h1 class="mx-auto mb-3 text-4xl font-bold sm:text-8xl">News</h1>
                <div class="mx-auto grid w-full max-w-3xl sm:grid-cols-2 gap-4 p-4">
                    {#each data.data as item}
                        <NewsCard data={item} />
                    {/each}
                </div>
            </div>
        </div>
        <!-- concept end -->
    </div>
    <Footer />
</div>