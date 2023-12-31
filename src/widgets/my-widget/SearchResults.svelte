<svelte:options customElement="nuclia-search-results" />

<script lang="ts">
  import { onMount } from 'svelte';
  import { debounceTime } from 'rxjs';
  import { take } from 'rxjs/operators';
  import { LoadingDots } from '@nuclia/ui';
  import globalCss from '../../../libs/nuclia/libs/search-widget/src/common/_global.scss?inline';
  import {
    _,
    entityRelations,
    getResultUniqueKey,
    getTrackingDataAfterResultsReceived,
    hasMore,
    hasPartialResults,
    hasSearchError,
    isAnswerEnabled,
    isEmptySearchQuery,
    loadFonts,
    loadMore,
    loadSvgSprite,
    logEvent,
    onlyAnswers,
    pendingResults,
    resultList,
    searchError,
    setWidgetActions,
    showResults,
    trackingReset,
  } from '@nuclia/ui';
  import { InfiniteScroll } from '@nuclia/ui';
  import { InfoCard, InitialAnswer, onClosePreview, ResultRow, Viewer } from '@nuclia/ui';
  import { injectCustomCss } from '@nuclia/ui';
  import CreationDate from '../../components/CreationDate.svelte';

  export let cssPath = '';
  export let mode = '';
  $: darkMode = mode === 'dark';

  const showLoading = pendingResults.pipe(debounceTime(1500));

  export const setViewerMenu = setWidgetActions;

  export function closePreview() {
    onClosePreview();
  }

  let svgSprite: string;
  let container: HTMLElement;

  onMount(() => {
    if (pendingResults.getValue() || resultList.getValue().length > 0) {
      showResults.set(true);
    }
    loadFonts();
    loadSvgSprite().subscribe((sprite) => (svgSprite = sprite));
    injectCustomCss(cssPath, container);
  });

  function renderingDone(node: HTMLElement) {
    getTrackingDataAfterResultsReceived.pipe(take(1)).subscribe((tracking) => {
      const tti = Date.now() - tracking.startTime;
      logEvent('search', {
        searchId: tracking.searchId || '',
        tti,
      });
      trackingReset.set(undefined);
    });
  }

  const onLoadMore = () => loadMore.set();
</script>

<svelte:element this="style">{@html globalCss}</svelte:element>

<div
  bind:this={container}
  class="nuclia-widget sw-video-results"
  class:dark-mode={darkMode}
  data-version="__NUCLIA_DEV_VERSION__"
>
  {#if $showResults && !$isEmptySearchQuery}
    {#if $hasSearchError && !$hasPartialResults}
      <div class="error">
        {#if $searchError?.status === 402}
          <strong>{$_('error.feature-blocked')}</strong>
        {:else}
          <strong>{$_('error.search')}</strong>
        {/if}
      </div>
    {:else if !$pendingResults && $resultList.length === 0 && !$onlyAnswers}
      <strong>{$_('results.empty')}</strong>
      <div class="results-end" use:renderingDone />
    {:else}
      {#if $hasPartialResults}
        <div class="partial-results-warning">
          <strong>{$_('error.partial-results')}</strong>
        </div>
      {/if}
      <div class="results-container">
        <div class="results" class:with-relations={$entityRelations.length > 0}>
          {#if $isAnswerEnabled}
            <InitialAnswer />
          {/if}
          <div class="search-results">
            {#each $resultList as result, i (getResultUniqueKey(result))}
              <CreationDate date={result.created} />
              <ResultRow {result} />
              {#if i === $resultList.length - 1}
                <div class="results-end" use:renderingDone />
              {/if}
            {/each}
            {#if $hasMore}
              <InfiniteScroll hasMore={$hasMore} on:loadMore={onLoadMore} />
            {/if}
          </div>
        </div>
        {#if $entityRelations.length > 0}
          <InfoCard entityRelations={$entityRelations} />
        {/if}
      </div>
      {#if $showLoading}
        <LoadingDots />
      {/if}
    {/if}
  {/if}

  <Viewer />

  <div id="nuclia-glyphs-sprite" hidden>
    {@html svgSprite}
  </div>
</div>

<style lang="scss" src="./SearchResults.scss"></style>
