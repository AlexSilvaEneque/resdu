<script setup lang="ts">
    interface IOption {
        name: string
        icon: string
        path: string
    }

    const isOpen : Ref<boolean> = ref(false)
    const options : Ref<Array<IOption>> = ref([])
    const widthScreen : Ref<number> = ref(0)

    

    const openMenu = () => {
        isOpen.value = !isOpen.value
    }

    const checkScreen = () => {
        widthScreen.value = window.innerWidth
        if (widthScreen.value > 639) {
            isOpen.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('resize', checkScreen)

        options.value = [
            {
                name: 'Inicio',
                icon: 'fa-house',
                path: '/'
            },
            {
                name: 'Preguntas',
                icon: 'fa-question',
                path: '/question'
            },
            {
                name: 'Categorias',
                icon: 'fa-list',
                path: '/category'
            },
            {
                name: 'Usuarios',
                icon: 'fa-users',
                path: '/user'
            },
            {
                name: 'Iniciar sesion',
                icon: 'fa-users',
                path: '/login'
            },
            {
                name: 'Registrarse',
                icon: 'fa-users',
                path: '/register'
            }
        ]
    })

</script>

<template>
    <div class="flex flex-row border-2 h-14">

        <div class="w-8/12 sm:w-1/4 flex justify-center">
                <img src="/img/resdu-logo.png" alt="logo resdu"
                    class="hover:cursor-pointer"
                    @click="$router.push({ path
                    : '/' })">
        </div>

        <div class="flex items-center justify-around sm:hidden w-1/3">
            <ClientOnly>
                <span>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </span>
                <span>
                    <font-awesome-icon icon="fa-solid fa-bars" 
                        @click="openMenu"/>
                </span>
            </ClientOnly>
        </div>

        <div class="hidden inset-0 z-50 sm:w-2/5 sm:flex items-center py-2 px-3">
            <input type="text" placeholder="..."
                class="border h-full w-full border-gray-400 rounded-sm px-2">
        </div>

        <div class="hidden sm:flex sm:flex-1 justify-center items-center">
            <button class="border border-gray-400 bg-gray-200 text-sm text-gray-600 p-2 rounded-md mr-2
                hover:cursor-pointer hover:bg-gray-100 duration-200">
                Iniciar sesión
            </button>
            <button class="border border-blue-500 bg-blue-600  text-sm text-white/90 p-2 rounded-md
                hover:cursor-pointer hover:bg-blue-500 duration-200">
                Registrarse
            </button>
        </div>

    </div>

    <div
        :class="[ isOpen ? 'h-fit w-full fixed z-50 rounded-b-xl bg-white shadow-md' : 'h-0' ]" 
        class="overflow-hidden duration-200 ease-in-out"
        @click.away="isOpen = false">
        <ul>
            <li v-for="(item, index) in options" :key="index"
                class="w-full py-2.5 px-3 text-gray-700 font-semibold">
                <NuxtLink :to="item.path">
                    <font-awesome-icon :icon="['fa-solid', item.icon]" 
                        class="w-1/5"/>
                    <span>
                        {{ item.name }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>