<script lang="ts">
    import { page } from '$app/stores';
    import series from '../../constants/series.js';
    import ItemLivro from '../../components/serie/ItemLivro.svelte';

    // Junta todos os livros de todas as séries num só array
    const livros = series.flatMap(serie => serie.livros);

    let termo = '';
    $: termo = $page.url?.searchParams?.get('livro') || '';

    function normalizar(str: any) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    $: resultados = termo
        ? livros.filter(livro =>
            normalizar(livro.titulo).includes(normalizar(termo)) ||
            normalizar(livro.autor.name).includes(normalizar(termo))
        )
        : [];
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Resultados da pesquisa</h1>
    <p class="mb-6 text-zinc-400">
        Mostrando resultados para: <span class="font-bold">{termo}</span>
    </p>

    {#if resultados.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {#each resultados as livro}
                <ItemLivro {livro} />
            {/each}
        </div>
    {:else}
        <p class="text-red-400">Nenhum livro encontrado.</p>
    {/if}
</div>