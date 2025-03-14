<script lang="ts">
    const { nazwa, url, img, data } = $props();
</script>

<a
    class="flex flex-col gap-2 p-1 font-[Satisfy] cursor-pointer w-[24%] h-[225px] items-center"
    href={`/zodiak/${url}`}
>
    <img class="w-24" alt="" src={img} />
    <div class="text-4xl font-bold font-mono">{nazwa}</div>
    {data}
</a>
