<script lang="ts">
    import personagens from '../../constants/personagens.js';
    import ItemPersonagem from '../../components/personagem/ItemPersonagem.svelte';
  
    let termo = "";
    let filtrados = personagens;
  
    $: filtrados = termo
      ? personagens.filter(p =>
          p.nome.toLowerCase().includes(termo.toLowerCase()) ||
          p.serie.toLowerCase().includes(termo.toLowerCase()) ||
          p.autor.toLowerCase().includes(termo.toLowerCase())
        )
      : personagens;
  </script>
  
  <h1 class="text-3xl font-black mb-8 text-center">Personagens dos Livros</h1>
  
  <div class="mb-8 flex justify-center">
    <input
      type="text"
      bind:value={termo}
      placeholder="Pesquisar personagem, série ou autor..."
      class="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
    />
  </div>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each filtrados as personagem}
      <ItemPersonagem {personagem} />
    {/each}
  </div>