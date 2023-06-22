<script>
  import {page} from '$app/stores';
</script>

<main class="main-description">
  <h1>{$page.status} {$page.error.message}</h1>

  {#if $page.status >= 500}
    <p>This can be caused by outdated Nuclia dependencies.</p>
    <p>To solve the problem, try to run <code>npm run missdev</code> and then reload the page.</p>
  {:else if $page.status === 404}
    <p>Seems like you’re trying to access a page that doesn’t exist…</p>
  {/if}
</main>

<style lang="scss">
  @import "common";

  code {
    background: #e6e6e6;
    padding: 2px 4px;
  }
</style>