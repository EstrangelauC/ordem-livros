<script lang="ts">
    export let serie: any = null;
</script>

{#if serie}
    <a href="/series/{serie.id}"
    class="flex flex-col rounded-md overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-[1.01] transition-all">
        <img src={serie.imagem} alt="Imagem da Serie" class="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover" />
        <div class="flex flex-col gap-1 md:gap-2 p-3 md:p-5">
            <span class="text-lg md:text-2xl font-black">{serie.titulo}</span>
            <span class="text-xs md:text-sm text-zinc-400 text-justify">{serie.descricao}</span>
            <button class="botao azul self-end mt-2 md:mt-0">
                <span>Leia Mais</span>
            </button>
        </div>
    </a>
{/if}