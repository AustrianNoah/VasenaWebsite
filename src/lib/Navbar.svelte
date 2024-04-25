<script>
    import { goto } from '$app/navigation';
</script>

<div class="flex w-full border-b border-b-white/5 bg-gradient-to-r from-white/5 p-4">
    <a
            on:contextmenu|preventDefault={() => {
			goto('/branding');
		}}
            href="/"
            class="aspect-square h-8 sm:h-14 duration-500 hover:rotate-[360deg] hover:scale-110"
    >
        <img src="/favicon.png" alt="" />
    </a>
    <div class="my-auto flex grow justify-end gap-4 text-lg uppercase [&>*]:hover:underline-offset-8">
        <a class="decoration-2 duration-200 hover:-translate-y-1 hover:underline" href="/">Start</a>
        <div class="group relative">
            <p class="duration-200 hover:-translate-y-1 cursor-pointer">Über</p>
            <div
                    class="invisible absolute top-0 right-0 translate-y-5 border border-white/5 bg-background p-4 text-right opacity-0 duration-200 group-hover:visible group-hover:translate-y-8 group-hover:opacity-100"
            >
                <a class="hover:text-primary" href="/news">News</a>
                <a class="hover:text-primary" href="/konzept">Konzept</a>
                <a class="hover:text-primary" href="/server">Server</a>
                <a class="hover:text-primary" href="/minigames">Minigames</a>
            </div>
        </div>
        <div class="group relative">
            <p class="duration-200 hover:-translate-y-1 cursor-pointer">Sonstiges</p>
            <div
                    class="invisible absolute top-0 right-0 translate-y-5 border border-white/5 bg-background p-4 text-right opacity-0 duration-200 group-hover:visible group-hover:translate-y-8 group-hover:opacity-100"
            >
                <a
                        class="hover:text-primary"
                        href="https://discord.gg/gapUTpADgb
				">Discord</a
                >
                <a class="hover:text-primary" href="/vote">Vote</a>
                <a class="hover:text-primary" href="/regeln">Regeln</a>
                <a class="hover:text-primary" href="/events">Events</a>
            </div>
        </div>
    </div>
</div>