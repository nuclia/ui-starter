<script lang="ts">
  import { browser } from '$app/environment';
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';
  import { onDestroy, onMount } from 'svelte';

  let searchBar: NucliaSearchBar | undefined = $state();
  let knowledgeBoxId = 'df8b4c24-2807-4888-ad6c-ae97357a638b';
  onMount(() => {
    if (browser) {
      document.body.classList.add('dark');
    }
  });

  onDestroy(() => {
    if (browser) {
      document.body.classList.remove('dark');
    }
  });
</script>

<header class="page-header">
  <div class="main-description">
    <h2>Dark mode</h2>
    <p>
      Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets using
      dark mode option.
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
    mode="dark"
  />
</header>

<NucliaSearchResults mode="dark" />

<style>
  @import '../common.css';
</style>
