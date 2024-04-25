<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import GameCard from '$lib/GameCard.svelte';

    type item = {
        title: string;
        description: string;
        image: string;
        id: string;
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
                <h1 class="mx-auto mb-3 text-4xl font-bold sm:text-8xl">Minigames</h1>
                <div class="mx-auto grid w-full max-w-3xl grid-cols-2 gap-4">
                    {#each data.data as item}
                        <GameCard data={item} />
                    {/each}
                </div>
            </div>
        </div>
        <!-- concept end -->
    </div>
    <Footer />
</div>