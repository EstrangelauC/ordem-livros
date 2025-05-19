<script lang="ts">
	import '../app.css';
	import Pagina from '../components/template/Pagina.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen">
    <div class="flex-1">
        <Pagina>
            {@render children()}
        </Pagina>
    </div>
</div>