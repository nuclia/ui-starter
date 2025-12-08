<script lang="ts">
  import { browser } from '$app/environment';
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';
  import { onDestroy, onMount } from 'svelte';

  let searchBar: NucliaSearchBar | undefined = $state();
  let knowledgeBoxId = 'df8b4c24-2807-4888-ad6c-ae97357a638b';

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

<header class="page-header">
  <div class="main-description">
    <h2>Custom theme</h2>
    <p>
      Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets with
      a custom theme.
    </p>
    <p>
      You can ask questions like "<strong
        class="example-query"
        onclick={() => searchBar?.search('Can I ingest video files?')}
        >Can I ingest video files?</strong
      >" or "<strong
        class="example-query"
        onclick={() => searchBar?.search('How to customize the widget?')}
        >How to customize the widget?</strong
      >"
    </p>
  </div>
  <NucliaSearchBar
    bind:this={searchBar}
    knowledgebox={knowledgeBoxId}
    lang="en"
    placeholder="Ask your question here"
    features="suggestions,permalink,answers,filter"
  />
</header>

<NucliaSearchResults />

<style>
  @import '../common.css';

  :global(body.custom) {
    --custom-text-color: var(--local-main-blue);
    --custom-border-color: var(--local-main-blue);
    --custom-border-focus-color: var(--local-main-blue);
    --custom-selected-background-color: #fff4b8;
    --custom-hover-background-color: #eeebff;
    --custom-thumbnail-background-color: #eeebff;
  }
</style>
