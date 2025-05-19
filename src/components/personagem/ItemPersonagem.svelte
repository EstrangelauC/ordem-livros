<script lang="ts">
    export let personagem;
  </script>
  
  <a href={`/personagens/${personagem.id}`}
     class="bg-zinc-900 rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg hover:bg-zinc-800 transition cursor-pointer">
    <img src={personagem.imagem} alt={personagem.nome} class="w-24 h-24 rounded-full border mb-3" />
    <span class="font-bold text-lg text-white mb-1">{personagem.nome}</span>
    <span class="text-xs text-zinc-400 mb-2">{personagem.serie} — {personagem.autor}</span>
    <p class="text-sm text-zinc-300 text-center">{personagem.descricao}</p>
  </a>