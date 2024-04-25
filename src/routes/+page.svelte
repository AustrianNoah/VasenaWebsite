<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import { Egg } from '$js/egg';
    import { onMount } from 'svelte';
    let text_copied = false;
    let show_credits = false;

    onMount(() => {
        var egg = new Egg('f,a,b,i,a,n', function () {
            show_credits = !show_credits;
        }).listen();
    });

    type data = {
        mc: {
            players: {
                online: number;
                max: number;
            };
        };
    };
    export let data: data;

    const copyToClipboard = (str: string) => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
</script>
<meta name="trustpilot-one-time-domain-verification-id" content="0d96fa55-77e6-4d3a-bc05-19fb42be3e0d"/>

<div class="flex flex-col ">
    <div
            class="w-full absolute z-10 top-0 {show_credits
			? 'h-12 hover:hue-rotate-180 duration-1000'
			: 'h-0'} overflow-hidden flex bg-red-500"
    >
        <p class="mx-auto my-auto uppercase font-semibold tracking-widest">Made by @fabian9799</p>
    </div>
    <div class="flex min-h-screen flex-col">
        <Navbar />
        <!-- hero start -->
        <div class="radial-bg flex grow items-center justify-center p-4">
            <div class="text-center">
                <h1 class="mb-3 text-4xl font-bold sm:text-8xl">Willkommen auf BedrockPlay's Seite</h1>

                <h2 class="sm:text-4xl">
                    Es sind gerade {data.mc.players.online}/{data.mc.players.max} Spieler auf dem Server
                </h2>
                <div class="mt-4 flex place-content-center gap-4">
                    <button
                            on:click={() => {
							copyToClipboard('pe.bedrockplay.fun');
							text_copied = true;
							setTimeout(() => {
								text_copied = false;
							}, 2000);
						}}
                            class="bg-primary rounded-xl px-4 py-2 sm:text-xl font-semibold uppercase duration-200 hover:bg-opacity-70"
                    >{text_copied ? 'IP wurde Kopiert!' : 'IP Kopieren'}</button
                    >
                    <a
                            class="bg-secondary rounded-xl px-4 py-2 sm:text-xl font-semibold uppercase duration-200 hover:bg-opacity-70"
                            href="/minigames">Minigames</a
                    >
                </div>
            </div>
        </div>
        <!-- hero end -->
    </div>
    <Footer />
</div>