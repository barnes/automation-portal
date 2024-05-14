<script lang="ts">
    import '@picocss/pico';
    import Menu from '$lib/components/Menu.svelte';
</script>

<main class="container">
    <Menu />
    <slot></slot>
</main>