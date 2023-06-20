<script lang="ts">
  import { NucliaSearchBar, NucliaSearchResults } from '@nuclia/ui';

  let knowledgeBoxId = '16375869-1037-460d-8648-b3ee9c9206c0';
</script>

<main>
  <header>
    <h1>Welcome to Nuclia UI starter project</h1>

    <div class="example-description">
      <p>We have indexed the market outlook reports from the biggest financial institutions world-wide. <br>You can ask questions like "Will France be in recession in 2023" or
        "Gold price evolution in 2023"</p>
      <p>Below are the default Nuclia <code>SearchBar</code> and <code>SearchResults</code> widgets</p>
    </div>
    <NucliaSearchBar
        knowledgebox={knowledgeBoxId}
        lang="en"
        placeholder="Ask your question here"
        features="suggestions,permalink,answers" />
  </header>

  <NucliaSearchResults />
</main>


<style lang="scss">
  main {
    font-family: sans-serif;
    padding: 1em;
    max-width: 100%;
    margin: 0 auto;

    header {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    .example-description {
      max-width: 944px;
      margin-bottom: 1rem;
      text-align: center;

      p {
        line-height: 1.25rem;
      }
    }
  }
</style>