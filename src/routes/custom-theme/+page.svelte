<script lang="ts">
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';

  let searchBar: NucliaSearchBar;
  let knowledgeBoxId = '16375869-1037-460d-8648-b3ee9c9206c0';

  onMount(() => {
    if (browser) {
      document.body.classList.add('custom');
    }
  });

  onDestroy(() => {
    if (browser) {
      document.body.classList.remove('custom');
    }
  });
</script>

<header>
  <div class="main-description">
    <h2>Custom theme</h2>
    <p>Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets with a custom theme.</p>
    <p>You can ask questions like
      "<strong class="example-query" on:click={() => searchBar.search('Will France be in recession in 2023?')}>Will France be in recession in 2023?</strong>"
       or "<strong class="example-query" on:click={() => searchBar.search('Gold price evolution in 2023')}>Gold price evolution in 2023</strong>"</p>
  </div>
  <NucliaSearchBar
      bind:this={searchBar}
      knowledgebox={knowledgeBoxId}
      lang="en"
      placeholder="Ask your question here"
      features="suggestions,permalink,answers,filter" />
</header>

<NucliaSearchResults />


<style lang="scss">
  @import "../common";

  :global(body.custom) {
    --custom-text-color: var(--local-main-blue);
    --custom-border-color: var(--local-main-blue);
    --custom-border-focus-color: var(--local-main-blue);
    --custom-selected-background-color: #FFF4B8;
    --custom-hover-background-color: #EEEBFF;
    --custom-thumbnail-background-color: #EEEBFF;
  }
</style>