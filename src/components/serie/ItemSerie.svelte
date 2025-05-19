<script lang="ts">
    export let serie: any = null;
  
    // Função para mostrar tempo relativo
    function tempoRelativo(data: any) {
      const agora = new Date();
      const criado = new Date(data);
      const diff = (agora.getTime() - criado.getTime()) / 1000; // em segundos
  
      if (diff < 60) return `há ${Math.floor(diff)} segundos`;
      if (diff < 3600) return `há ${Math.floor(diff / 60)} minutos`;
      if (diff < 86400) return `há ${Math.floor(diff / 3600)} horas`;
      if (diff < 2592000) return `há ${Math.floor(diff / 86400)} dias`;
      return criado.toLocaleDateString("pt-PT");
    }
  </script>
  
  {#if serie}
    <a href="/series/{serie.id}"
      class="flex flex-col rounded-md overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-[1.01] transition-all">
      <img src={serie.imagem} alt="Imagem da Serie" class="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover" />
      <div class="flex flex-col gap-1 md:gap-2 p-3 md:p-5">
        <span class="text-lg md:text-2xl font-black">{serie.titulo}</span>
        <span class="text-xs text-zinc-400 mb-2">
          Publicado {tempoRelativo(serie.criadoEm)}
        </span>
        <span class="text-xs md:text-sm text-zinc-400 text-justify">{serie.descricao}</span>
        <button class="botao azul self-end mt-2 md:mt-0">
          <span>Leia Mais</span>
        </button>
      </div>
    </a>
  {/if}