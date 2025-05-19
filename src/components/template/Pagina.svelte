<script>
    import Cabecalho from "./Cabecalho.svelte";
    import Rodape from "./Rodape.svelte";
    import AreaLateral from "./AreaLateral.svelte";
</script>

<div 
    class="
        flex flex-col min-h-screen
        bg-black text-white"
>
    <Cabecalho />
    <div class="flex-1 flex flex-col md:flex-row gap-5 max-w-7xl mx-auto w-full p-2 md:p-5">
        <main class="w-full md:flex-1">
            <slot></slot>
        </main>
        <div class="hidden md:block w-80">
            <AreaLateral />
        </div>
        <div class="block md:hidden w-full mt-4">
            <!-- Opcional: AreaLateral aparece em baixo no mobile -->
            <AreaLateral />
        </div>
    </div>
   
    <Rodape />
</div>