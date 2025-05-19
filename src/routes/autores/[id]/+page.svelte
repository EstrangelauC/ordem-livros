<script>
  import { page } from '$app/stores';
  import ConteudoAutor from '../../../components/autor/ConteudoAutor.svelte';
  import ComentarioAutor from '../../../components/autor/ComentarioAutor.svelte';
</script>

<ConteudoAutor autor={$page.data.autor} />
<ComentarioAutor autorId={$page.data.autor.id} />