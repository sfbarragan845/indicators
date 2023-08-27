<template>
    <div class="mx-auto">
        <div class="-mx-4 sm:-mx-8 px-4 py-2 sm:px-8 flex flex-wrap flex-grow justify-between">
            <div class="grid place-items-center relative">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon />
                </span>
                <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-searcg" type="text" placeholder="Search">
            </div>
            <div class="flex items-center py-2">
                <button @click="createNewItem"
                    class="inline-flex align-items-center gap-x-2 px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    <AddIcon /> <span>Nuevo</span>
                </button>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-xl overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase">
                            <th class="px-6 py-3 font-medium">Nro</th>
                            <th class="px-6 py-3 font-medium">Codigo</th>
                            <th class="px-6 py-3 font-medium">Nombre</th>
                            <th class="px-6 py-3 font-medium">Fórmula</th>
                            <th class="px-6 py-3 font-medium">Descripción</th>
                            <th class="px-6 py-3 font-medium">Fecha Inicio</th>
                            <th class="px-6 py-3 font-medium">Reporta</th>
                            <th class="px-6 py-3 font-medium">Linea Base</th>
                            <th class="px-6 py-3 font-medium">Comportamiento</th>
                            <th class="px-6 py-3 font-medium">Unidad Medida</th>
                            <th class="px-6 py-3 font-medium">Sentido</th>
                            <th class="px-6 py-3 font-medium">Denominador</th>
                            <th class="px-6 py-3 text-center font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in itemsForCurrentPage" :key="item.id">
                            <td class="px-6 py-2 border-b border-gray-200 text-sm">{{ (index+1) }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.codigo}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.nombre}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.formula}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.descripcion}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.fechaInicioMedicion}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.reportaA}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.lineaBase}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.comportamiento}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.unidadMedida}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.sentidoMedicion}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.denominador}}</td>
                            <td
                                class="px-6 inline-flex w-full justify-center gap-x-4 py-2 whitespace-no-wrap border-b border-gray-200 text-sm text-center">
                                <button @click="editItem(item)"
                                    class="inline-block px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600">
                                    <EditIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span class="text-xs xs:text-sm text-gray-900">
                        Showing {{ (currentPage - 1) * 5 + 1 }} to {{ Math.min(currentPage * 5, items.length) }} of {{
                            items.length }} Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                        <button @click="currentPage--" :disabled="currentPage === 1"
                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                            Prev
                        </button>
                        <button @click="currentPage++" :disabled="currentPage === totalPages()"
                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import icons from '~/icons';

export default {
    components: {
        SearchIcon: icons.search,
        AddIcon: icons.add,
        EditIcon: icons.edit,
        DeleteIcon: icons.delete,
        ReturnIcon: icons.return
    },
    props: {
        items: Array,
        currentPage: {
            type: Number,
            default: 1
        }
    },
    methods: {
        totalPages() {
            const itemsPerPage = 5; // Cambia esto al número deseado de elementos por página
            return Math.ceil(this.items.length / itemsPerPage);
        },
        setCurrentPage(page) {
            const totalPages = this.totalPages();
            this.currentPage = Math.min(Math.max(page, 1), totalPages);
        },
        editItem(item) {
            // Aquí se debería manejar la lógica de edición
            console.log(`Editar entidad con ID: ${item.id}`)
        },
        createNewItem() {
            this.$router.push('add_indicator');
        }
    },
    name: 'NuxtTableEntity',
    computed: {
        itemsForCurrentPage() {
            const itemsPerPage = 5; // Cambia esto al número deseado de elementos por página
            const startIndex = (this.currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return this.items.slice(startIndex, endIndex);
        }
    },
    totalPages() {
        const itemsPerPage = 5; // Cambia esto al número deseado de elementos por página
        const totalItems = this.items.length;
        return Math.ceil(totalItems / itemsPerPage);
    },
}
</script>