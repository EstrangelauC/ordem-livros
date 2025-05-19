<script lang="ts">
    export let autorId: string;
  
    // Estado dos campos do formulário
    let nome = "";
    let email = "";
    let comentario = "";
  
    // Carregar comentários antigos do localStorage
    let comentarios:any = [];
    $: comentarios = JSON.parse(localStorage.getItem(`comentarios_${autorId}`) || "[]");
  
    function adicionarComentario() {
      if (!nome || !email || !comentario) {
        alert("Preenche todos os campos!");
        return;
      }
      const novoComentario = {
        nome,
        email,
        comentario,
        data: new Date().toLocaleString()
      };
      comentarios = [novoComentario, ...comentarios];
      localStorage.setItem(`comentarios_${autorId}`, JSON.stringify(comentarios));
      // Limpa os campos
      nome = "";
      email = "";
      comentario = "";
    }
  </script>
  
  <div class="mt-8">
    <h2 class="text-lg font-bold mb-2">Comentários</h2>
    <form on:submit|preventDefault={adicionarComentario} class="flex flex-col gap-3 mb-4">
      <input
        type="text"
        bind:value={nome}
        placeholder="Nome"
        class="px-2 py-1 rounded border border-zinc-400"
        required
      />
      <input
        type="email"
        bind:value={email}
        placeholder="Email"
        class="px-2 py-1 rounded border border-zinc-400"
        required
      />
      <textarea
        bind:value={comentario}
        placeholder="Comentário"
        class="px-2 py-1 rounded border border-zinc-400"
        required
        rows="3"
      ></textarea>
      <button
        type="submit"
        class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 self-start"
      >
        Enviar comentário
      </button>
    </form>
  
    {#if comentarios.length === 0}
      <p class="text-zinc-400">Ainda não existem comentários.</p>
    {:else}
      <ul class="space-y-3">
        {#each comentarios as c}
          <li class="border-b border-zinc-200 pb-2">
            <strong>{c.nome}</strong> <span class="text-xs text-zinc-400">({c.data})</span><br />
            <span class="text-zinc-500">{c.comentario}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>