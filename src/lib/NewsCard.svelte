<script>
    import dayjs from 'dayjs';

    let content_is_collapsed = true;
    export let data = {
        title: '',
        description: '',
        date: '',
        author: '',
        '@expand': {
            author: {
                name: ''
            }
        }
    };

    const formatted_date = dayjs(data.date).format('DD.MM.YYYY');
</script>

<div
        class="relative border border-white/5 hover:border-white/10 duration-100 hover:shadow-lg bg-background p-4 overflow-hidden"
>
    <h1 class="text-3xl">{data.title}</h1>
    <div>
        <p class="{content_is_collapsed ? 'h-24' : ''} overflow-hidden duration-200">
            {data.description}
        </p>
    </div>
    <button
            on:click={() => {
			content_is_collapsed = !content_is_collapsed;
		}}
            class="px-1.5 mt-2 py-0.5 bg-white/10 hover:bg-white/5"
    >{content_is_collapsed ? 'Weiter lesen' : 'Einklappen'}</button
    >
    <p class="mt-2 opacity-40">{formatted_date} - {data['@expand'].author.name}</p>
    <div class="absolute top-0 right-0 p-3">
        <svg
                class="w-8 h-8 fill-primary hover:scale-150 hover:rotate-12 duration-200 news-icon-shadow"
                viewBox="0 0 24 24"
        >
            <path
                    d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z"
            />
        </svg>
    </div>
</div>