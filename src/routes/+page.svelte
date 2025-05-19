<script>
  import ItemSerie from "../components/serie/ItemSerie.svelte";
  import series from "../constants/series.js";
</script>

<!-- Bloco de vídeo informativo -->
<div class="w-full max-w-3xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg">
    <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/watch?v=IHAHI61f8Rw"
        title="Por que é bom ler livros?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full aspect-video"
    ></iframe>
</div>

<!-- O resto do conteúdo da página inicial -->
<div class="flex flex-col gap-5">
  {#each series as serie}
    <ItemSerie {serie} />
  {/each}
</div>
