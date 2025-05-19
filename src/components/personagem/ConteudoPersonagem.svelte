<script lang="ts">
    export let personagem;
  </script>
  
  <div class="flex flex-col items-center gap-4 p-6 bg-zinc-900 rounded-lg shadow">
    <img src={personagem.imagem} alt={personagem.nome} class="w-32 h-32 rounded-full border" />
    <h1 class="text-3xl font-black text-white">{personagem.nome}</h1>
    <span class="text-xs text-zinc-400">{personagem.serie} — {personagem.autor}</span>
    <p class="text-base text-zinc-300 text-center mt-2">{personagem.descricao}</p>
  </div>