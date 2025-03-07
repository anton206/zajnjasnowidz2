<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Zajn Jasnowidz</title>
</svelte:head>

{@render children()}
