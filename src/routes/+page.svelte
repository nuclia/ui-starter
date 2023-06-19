<script lang="ts">
  let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
Count: {count}
<button on:click={() => count ++}>+1</button>
<button on:click={() => count --}>-1</button>