<a href="/" class="flex items-center gap-1 flex-shrink-0">
    <img src="/logo.png" alt="Logo" class="w-20 h-20"/>
    <div class="flex flex-col leading-3">
        <span class="font-thin text-zinc-400">ORDRE DES</span>
        <span class="font-black text-lg tracking-widest">LIVRES</span>
        <p class="text-xs text-zinc-500 mt-2">Liste complète de toutes les séries de livres dans l’ordre</p>
    </div>
</a>
<form class="flex-1 flex items-center justify-end gap-2 ml-4" on:submit|preventDefault={() => pesquisarLivro(query)}>
    <input
        type="text"
        placeholder="Pesquisar livros..."
        bind:value={query}
        class="w-full max-w-xs px-3 py-2 rounded-md border border-zinc-300 bg-zinc-900 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    />
    <button
        type="submit"
        class="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm"
    >
        Pesquisar
    </button>
</form>

<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let query = "";
    const dispatch = createEventDispatcher();

    function pesquisarLivro(q: string) {
        window.location.href = `/pesquisa?livro=${encodeURIComponent(q)}`;
    }
</script>