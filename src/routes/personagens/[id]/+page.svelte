<script lang="ts">
  import ConteudoPersonagem from '../../../components/personagem/ConteudoPersonagem.svelte';

  export let data;
</script>

<ConteudoPersonagem personagem={data.personagem} />