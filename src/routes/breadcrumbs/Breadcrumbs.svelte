<script lang="ts">
    export let breadcrumbs: {url: string, label: string}[];
</script>

<div class="breadcrumb-container">
    {#each breadcrumbs as breadcrumb, i}
        <a href={breadcrumb.url}
           target="_blank"
           class:current={i === breadcrumbs.length - 1}>{breadcrumb.label}</a>
        {#if i < breadcrumbs.length - 1} > {/if}
    {/each}
</div>

<style lang="scss">
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