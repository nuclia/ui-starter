<script lang="ts">
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';

  let searchBar: NucliaSearchBar | undefined = $state();
  let knowledgeBoxId = 'df8b4c24-2807-4888-ad6c-ae97357a638b';
</script>

<header class="page-header">
  <div class="main-description">
    <h2>Main widgets</h2>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <p>
      We have indexed our tecnical documentation.
      <br />You can ask questions like "<strong
        class="example-query"
        onclick={() => searchBar?.search('Can I ingest video files?')}
        >Can I ingest video files?</strong
      >" or "<strong
        class="example-query"
        onclick={() => searchBar?.search('How to customize the widget?')}
        >How to customize the widget?</strong
      >"
    </p>
    <p>
      Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets
    </p>
  </div>
  <NucliaSearchBar
    bind:this={searchBar}
    knowledgebox={knowledgeBoxId}
    lang="en"
    placeholder="Ask your question here"
    features="suggestions,permalink,answers,relations,filter"
  />
</header>

<NucliaSearchResults />

<style>
  @import 'common.css';
</style>
