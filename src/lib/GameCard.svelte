<script>
    export let data = {
        title: '',
        description: '',
        image: '',
        id: ''
    };
</script>

<div
        class=" border border-white/5 hover:border-white/10 duration-100 hover:shadow-lg bg-background  overflow-hidden"
>
    <img
            class="hover:scale-[2.7] duration-500"
            src="https://pbase.vasena.xyz/api/files/minigames/{data.id}/{data.image}?thumb=900x400"
            alt=""
    />
    <div class="p-4">
        <h1 class="text-3xl">{data.title}</h1>
        <p class=" overflow-hidden duration-200">
            {data.description}
        </p>
    </div>
</div>