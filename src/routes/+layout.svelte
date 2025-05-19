<script lang="ts">
	import '../app.css';
	import Pagina from '../components/template/Pagina.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col md:flex-row min-h-screen">
    <!-- Conteúdo principal -->
    <main class="flex-1">
        <Pagina>
            {@render children()}
        </Pagina>
    </main>
</div>