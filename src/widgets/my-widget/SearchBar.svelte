<svelte:options customElement="nuclia-search-bar" accessors />

<script lang="ts">
  import {
    getRAGImageStrategies,
    getRAGStrategies,
    type KBStates,
    type Nuclia,
    type RAGImageStrategy,
    type RAGStrategy,
    type WidgetFeatures,
  } from '@nuclia/core';
  import { downloadDump, getApiErrors, initNuclia, resetNuclia } from '@nuclia/ui';
  import { createEventDispatcher, onMount } from 'svelte';
  import { injectCustomCss, loadFonts, loadSvgSprite, setCDN } from '@nuclia/ui';
  import { setLang } from '@nuclia/ui';
  import { SearchInput } from '@nuclia/ui';
  import { setupTriggerSearch } from '@nuclia/ui';
  import globalCss from '../../../libs/nuclia/libs/search-widget/src/common/_global.scss?inline';
  import {
    chatPlaceholder,
    widgetFeatures,
    widgetFilters,
    widgetImageRagStrategies,
    widgetJsonSchema,
    widgetPlaceholder,
    widgetRagStrategies,
  } from '@nuclia/ui';
  import {
    activatePermalinks,
    activateTypeAheadSuggestions,
    initAnswer,
    initEntitiesStore,
    initLabelStore,
    initUsageTracking,
    initViewer,
    setupTriggerGraphNerSearch,
  } from '@nuclia/ui';
  import {
    entityRelations,
    preselectedFilters,
    searchFilters,
    searchQuery,
    triggerSearch,
  } from '@nuclia/ui';
  import { typeAhead } from '@nuclia/ui';
  import { chatError, type WidgetFilters } from '@nuclia/ui';
  import { InfoCard } from '@nuclia/ui';
  import { IconButton, Modal } from '@nuclia/ui';
  import { BehaviorSubject, delay, filter, firstValueFrom } from 'rxjs';

  export let backend = 'https://nuclia.cloud/api';
  export let zone = 'europe-1';
  export let knowledgebox: string;
  export let placeholder = '';
  export let lang = '';
  export let cdn = '';
  export let apikey = '';
  export let account = '';
  export let client = 'widget';
  export let state: KBStates = 'PUBLISHED';
  export let features = '';
  export let standalone = false;
  export let proxy = false;
  export let mode = '';
  export let filters = '';
  export let preselected_filters = '';
  export let cssPath = '';
  export let prompt = '';
  export let system_prompt = '';
  export let generativemodel = '';
  export let no_tracking = false;
  export let rag_strategies = '';
  export let rag_image_strategies = '';
  export let not_enough_data_message = '';
  export let ask_to_resource = '';
  export let max_tokens: number | string | undefined = undefined;
  export let max_output_tokens: number | string | undefined = undefined;
  export let max_paragraphs: number | undefined = undefined;
  export let query_prepend = '';
  export let json_schema = '';
  export let vectorset = '';
  export let chat_placeholder = '';

  let _ready = new BehaviorSubject(false);
  const ready = _ready.asObservable().pipe(filter((r) => r));
  export const onReady = () => firstValueFrom(ready);
  export const onError = getApiErrors();
  export const reset = () => resetNuclia();

  let nucliaAPI: Nuclia;
  export let initHook: (n: Nuclia) => void = () => {};

  $: darkMode = mode === 'dark';
  $: {
    widgetPlaceholder.set(placeholder || 'input.placeholder');
  }
  $: {
    chatPlaceholder.set(chat_placeholder || 'answer.placeholder');
  }

  let _features: WidgetFeatures = {};
  let _filters: WidgetFilters = {};
  let _jsonSchema: object | null = null;
  let _ragStrategies: RAGStrategy[] = [];
  let _ragImageStrategies: RAGImageStrategy[] = [];
  let _max_tokens: number | undefined;
  let _max_output_tokens: number | undefined;

  export function search(query: string, filters?: string[]) {
    searchQuery.set(query);
    if (filters) {
      searchFilters.set({ filters });
    }
    typeAhead.set(query || '');
    triggerSearch.next();
  }

  export function reloadSearch() {
    console.log(`Reload search`);
    triggerSearch.next();
  }

  export function logState() {
    console.log(`Current widget configuration:`, {
      _features,
      _filters,
      _ragStrategies,
      prompt,
      system_prompt,
      generativemodel,
      preselected_filters,
      mode,
      proxy,
      standalone,
      backend,
      zone,
      knowledgebox,
      placeholder,
      lang,
      cdn,
      apikey,
      account,
      not_enough_data_message,
      vectorset,
    });
  }

  export function dump() {
    downloadDump();
  }

  const dispatch = createEventDispatcher();
  const dispatchCustomEvent = (name: string, detail: any) => {
    dispatch(name, detail);
  };

  let svgSprite: string;
  let container: HTMLElement;

  let showRelations = false;

  ready.pipe(delay(200)).subscribe(() => {
    initHook(nucliaAPI);

    // any feature that calls the Nuclia API immediately at init time must be done here
    if (_features.permalink) {
      activatePermalinks();
    }
    if (_features.debug) {
      nucliaAPI.events.dump().subscribe((data) => {
        dispatchCustomEvent('logs', data);
      });
    }
  });

  onMount(() => {
    if (cdn) {
      setCDN(cdn);
    }
    _features = (features ? features.split(',').filter((feature) => !!feature) : []).reduce(
      (acc, current) => ({ ...acc, [current as keyof WidgetFeatures]: true }),
      {},
    );
    _filters = (filters ? filters.split(',').filter((filter) => !!filter) : []).reduce(
      (acc, current) => ({ ...acc, [current]: true }),
      {},
    );
    if (Object.keys(_filters).length === 0) {
      _filters.labels = true;
      _filters.entities = true;
    }
    _ragStrategies = getRAGStrategies(rag_strategies);
    _ragImageStrategies = getRAGImageStrategies(rag_image_strategies);
    try {
      _jsonSchema = json_schema ? JSON.parse(json_schema) : null;
    } catch (e) {
      _jsonSchema = null;
    }
    _max_tokens = typeof max_tokens === 'string' ? parseInt(max_tokens, 10) : max_tokens;
    _max_output_tokens =
      typeof max_output_tokens === 'string' ? parseInt(max_output_tokens, 10) : max_output_tokens;

    nucliaAPI = initNuclia(
      {
        backend,
        zone,
        knowledgeBox: knowledgebox,
        client,
        apiKey: apikey,
        standalone,
        proxy,
        account,
        accountId: account,
      },
      state,
      {
        features: _features,
        prompt,
        system_prompt,
        generative_model: generativemodel,
        ask_to_resource,
        max_tokens: _max_tokens,
        max_output_tokens: _max_output_tokens,
        max_paragraphs,
        query_prepend,
        vectorset,
        not_enough_data_message,
      },
      no_tracking,
    );

    // Setup widget in the store
    widgetFeatures.set(_features);
    widgetFilters.set(_filters);
    widgetRagStrategies.set(_ragStrategies);
    widgetImageRagStrategies.set(_ragImageStrategies);
    widgetJsonSchema.set(_jsonSchema);

    if (_features.filter) {
      if (_filters.labels || _filters.labelFamilies) {
        initLabelStore();
      }
      if (_filters.entities) {
        initEntitiesStore();
      }
    }
    if (preselected_filters) {
      preselectedFilters.set(preselected_filters);
    }
    if (_features.answers) {
      initAnswer();
    }
    loadFonts();
    loadSvgSprite().subscribe((sprite) => (svgSprite = sprite));

    if (_features.suggestions || _features.autocompleteFromNERs) {
      activateTypeAheadSuggestions();
    }

    lang = lang || window.navigator.language.split('-')[0] || 'en';
    setLang(lang);

    setupTriggerSearch(dispatchCustomEvent);
    initViewer();

    if (_features.knowledgeGraph) {
      setupTriggerGraphNerSearch();
    }
    initUsageTracking(no_tracking);
    injectCustomCss(cssPath, container);

    _ready.next(true);

    return () => resetNuclia();
  });

  function displayRelations() {
    showRelations = true;
  }
  function hideRelations() {
    showRelations = false;
  }
</script>

<svelte:element this="style">{@html globalCss}</svelte:element>

<div
  bind:this={container}
  class="nuclia-widget"
  class:dark-mode={darkMode}
  data-version="__NUCLIA_DEV_VERSION__"
>
  {#if $ready && !!svgSprite}
    <div class="search-box">
      <SearchInput on:resetQuery={() => dispatchCustomEvent('resetQuery', '')} />

      {#if $entityRelations.length > 0}
        <IconButton icon="info" aspect="basic" on:click={displayRelations} />
      {/if}
    </div>
  {/if}

  <Modal show={showRelations} on:close={hideRelations}>
    <div class="close-button">
      <IconButton icon="cross" aspect="basic" on:click={hideRelations} />
    </div>
    <div class="dialog-content">
      <InfoCard entityRelations={$entityRelations} />
    </div>
  </Modal>

  <div id="nuclia-glyphs-sprite" hidden>
    {@html svgSprite}
  </div>
</div>

<style
  lang="scss"
  src="../../../libs/nuclia/libs/search-widget/src/common/common-style.scss"
></style>
