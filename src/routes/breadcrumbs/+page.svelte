<script lang="ts">
  import {
    getResultUniqueKey,
    hasMore,
    InfiniteScroll,
    loadFonts,
    loadMore,
    loadSvgSprite,
    NucliaSearchBar,
    pendingResults,
    resultList,
    ResultRow,
    showResults,
    Viewer,
  } from '@nuclia/ui';
  import { onMount } from 'svelte';
  import globalCss from '../../../libs/nuclia/libs/search-widget/src/common/global.css?inline';
  import Breadcrumbs from './Breadcrumbs.svelte';

  let searchBar: NucliaSearchBar = $state();
  let knowledgeBoxId = 'df8b4c24-2807-4888-ad6c-ae97357a638b';

  let svgSprite: string = $state();

  onMount(() => {
    if (pendingResults.getValue() || resultList.getValue().length > 0) {
      showResults.set(true);
    }
    loadFonts();
    loadSvgSprite().subscribe((sprite) => (svgSprite = sprite));
  });

  const onLoadMore = () => loadMore.set();
</script>

<header class="page-header">
  <div class="main-description">
    <h2>Customized results</h2>
    <p>
      We have indexed Nuclia’s documentation support pages.
      <br />You can ask questions like "<strong
        class="example-query"
        onclick={() => searchBar.search('What can I do with Nuclia?')}
        >What can I do with Nuclia?</strong
      >" or "<strong
        class="example-query"
        onclick={() => searchBar.search('How does Nuclia deal with privacy?')}
        >How does Nuclia deal with privacy?</strong
      >"
    </p>
    <p>
      Below is the default Nuclia <code>SearchBar</code>. The search results are mostly built using
      Nuclia’s UI components, customized with a breadcrumb.
    </p>
  </div>
  <NucliaSearchBar
    bind:this={searchBar}
    knowledgebox={knowledgeBoxId}
    lang="en"
    placeholder="Ask your question here"
    features="suggestions,permalink"
  />
</header>

<svelte:element this={'style'}>{@html globalCss}</svelte:element>

<div class="nuclia-widget sw-video-results">
  <div class="results-container">
    <div class="results">
      <div class="search-results">
        {#each $resultList as result, i (getResultUniqueKey(result))}
          <div class="result-and-breadcrumb">
            <Breadcrumbs path={result.slug}></Breadcrumbs>
            <ResultRow {result} />
          </div>
        {/each}
        {#if $hasMore}
          <InfiniteScroll hasMore={$hasMore} on:loadMore={onLoadMore} />
        {/if}
      </div>
    </div>
  </div>

  <Viewer />

  <div id="nuclia-glyphs-sprite" hidden>
    {@html svgSprite}
  </div>
</div>

<style>
  @import '../common.css';
  @import 'libs/nuclia/libs/search-widget/src/widgets/search-widget/SearchResults.css';

  .result-and-breadcrumb {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>
