<script setup lang="ts">

</script>

<template>
    <div class="flex flex-row border-2 h-14">
        <div class="basis-1/4 flex justify-center">
            <img src="favicon.ico" alt="logo resdu">
        </div>
        <div class="basis-1/2 flex items-center py-2">
            <input type="text"
                class="border h-full w-full border-gray-400 rounded-sm">
        </div>
        <div class="basis-1/4 flex justify-end pr-5 items-center">
            <button class="border border-gray-400 bg-gray-200 text-sm text-gray-600 px-4 py-2 rounded-md mr-2
                hover:cursor-pointer hover:bg-gray-100 duration-200">
                Iniciar Sessión
            </button>
            <button class="border border-blue-500 bg-blue-600  text-sm text-white/90 px-4 py-2 rounded-md
                hover:cursor-pointer hover:bg-blue-500 duration-200">
                Registrarse
            </button>
        </div>
    </div>
</template>