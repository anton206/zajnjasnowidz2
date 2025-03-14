<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Zajn Jasnowidz</title>
</svelte:head>

<main
    class="w-screen h-screen bg-[url('/tlo-chris.jpg')] text-[gold] font-[Satisfy]"
>
    {@render children()}
</main>
