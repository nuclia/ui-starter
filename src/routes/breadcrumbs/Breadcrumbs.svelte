<script lang="ts">
  interface Props {
    path: string;
  }

  let { path }: Props = $props();

  let breadcrumbs = $derived(path.split('-'));
</script>

<div class="breadcrumb-container">
  {#each breadcrumbs as breadcrumb, i}
    <a href="#" target="_blank" class:current={i === breadcrumbs.length - 1}>{breadcrumb}</a>
    {#if i < breadcrumbs.length - 1}
      >
    {/if}
  {/each}
</div>

<style>
  .breadcrumb-container {
    display: flex;
    gap: 0.5rem;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  a.current {
    color: inherit;
  }
</style>
