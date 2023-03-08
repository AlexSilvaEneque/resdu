<script setup lang="ts">

</script>

<template>
    <div>
        <Navbar />
        <div class="xl:max-w-7xl mx-auto grid grid-cols-12 pt-4">

            <div class="hidden sm:block sm:col-span-3 xl:col-span-2">
                Sidebar
            </div>

            <div class="col-span-12 sm:col-span-9 xl:col-span-7">
                <div class="flex justify-between">
                    <h1 class="text-lg font-semibold">
                        Explora algunas preguntas
                    </h1>
                    <button class="h-10 w-48 text-sm rounded-md bg-blue-500 text-white/80 font-semibold">
                        Formular pregunta
                    </button>
                </div>
                <slot />
            </div>

            <div class="hidden xl:block xl:col-span-3">
                Noticias
            </div>
        </div>
    </div>
</template>