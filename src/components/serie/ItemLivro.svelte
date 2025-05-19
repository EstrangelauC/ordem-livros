<script lang="ts">
    import { IconBrandAmazon } from "@tabler/icons-svelte";
    export let livro: any = null;
</script>

{#if livro}
<a href={livro.link} 
    target="_blank" 
    class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
>
    <img src={livro.imagem} alt="Imagem do Livro" class="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover" />
    <div class="flex-1 flex flex-col p-3 md:p-5 gap-2">
        <span class="flex-1 font-bold text-center text-base md:text-lg">{livro.titulo}</span>
        <button class="botao azul">
            <IconBrandAmazon size={25} />
            <span>Link do Livro</span>
        </button>
    </div>
</a>
{/if}