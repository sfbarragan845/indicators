<template>
    <div class="mx-auto">
        <div class="-mx-auto p-2 flex flex-wrap justify-between">
            <div class="grid place-items-center relative">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon />
                </span>
                <slot></slot>
                <!-- <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-searcg" type="text" placeholder="Search"> -->
            </div>
            <div class="items-center py-2 text-center">
                <NuxtLink to="/public/Actividad/0"
                    class="whitespace-nowrap inline-flex align-items-center gap-x-2 px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    <AddIcon /> <span>Nueva Actividad</span>
                </NuxtLink>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-xl overflow-hidden">
                <table class="min-w-full leading-normal" :data="items">
                    <thead>
                        <tr class="bg-gray-50  border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                            <th class="p-2 font-medium">Nro</th>
                            <th class="p-2 font-medium">URL</th>
                            <th class="p-2 font-medium">Fecha Creación</th>
                            <th class="p-2 font-medium">Correo</th>
                            <th class="p-2 font-medium">Tipo</th>
                            <th class="p-2 font-medium">Unidades</th>
                            <th class="p-2 font-medium">Responsable</th>
                            <!-- <th class="p-2 font-medium">Cumplimientos</th> -->
                            <th class="p-2 font-medium">Indicador</th>
                            <th class="p-2 font-medium">Servicio</th>
                            <th class="px-6 py-3 text-center font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in itemsForCurrentPage"
                            :key="item.entity.id">
                            <td class="p-2 whitespace-no-wrap border-gray-200 text-sm">
                                {{ getRowNumber(index) }}</td>
                            <td class="p-2 whitespace-no-wrap max-width-column  overflow-x-auto border-gray-200 text-sm">
                                {{ item.entity.url }}</td>
                            <td class="p-2 whitespace-no-wrap  border-gray-200 text-sm">
                                {{ new Date(item.entity.fechaCreacion).toISOString().split('T')[0] }}</td>
                            <td class="p-2 whitespace-no-wrap overflow-x-auto border-gray-200 text-sm">
                                {{
                                    item.entity.correoElectronico }}</td>
                            <td
                                class="p-2 whitespace-no-wrap max-width-column overflow-hidden overflow-x-auto border-gray-200 text-sm">
                                {{ item.entity.tipoActividad
                                }}</td>
                            <td
                                class="p-2 whitespace-no-wrap max-width-column overflow-hidden overflow-x-auto border-gray-200 text-sm">
                                {{ item.entity.unidades }}
                            </td>
                            <td class="p-2 whitespace-no-wrap border-gray-200 text-sm">{{ item.entity.responsable }}
                            </td>
                            <!-- <td class="p-2 whitespace-no-wrap border-gray-200 text-sm">{{ item.entity.cumplimientos
                            }}</td> -->
                            <td class="p-2 whitespace-no-wrap border-gray-200 text-sm">{{ item.indicator.nombre
                            }}</td>
                            <td class="p-2 whitespace-no-wrap border-gray-200 text-sm">{{ item.service.nombre
                            }}</td>
                            <td class="p-2 border-gray-200 text-sm text-center">
                                <div class="grid whitespace-no-wrap grid-cols-2 gap-x-2">
                                    <NuxtLink :to="`/public/Actividad/${item.entity.id}`"
                                        class="inline-block p-2 text-sm leading-5 font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600">
                                        <EditIcon />
                                    </NuxtLink>
                                    <button title="Eliminar se ha deshabilitado temporalmente" disabled
                                        class="inline-block p-2 text-sm leading-5 font-medium rounded-md text-white bg-gray-400">
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--PAGINACIÓN-->
                <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
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
<style scoped>
/* Handle text overflow and wrapping */
.max-width-column {
    max-width: 15rem;
}
</style>
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
    },
    data() {
        return {
            currentPage: 1, // Cambia el valor inicial según tus necesidades
        };
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
        actualizarDatos(updatedItem) {
            // Busca el índice del elemento actualizado en la lista de items
            const index = this.items.findIndex(item => item.id === updatedItem.id);
            if (index !== -1) {
                // Actualiza el elemento en la lista con los nuevos datos
                this.items.splice(index, 1, updatedItem);
            }
        },
        getRowNumber(index) {
            const itemsPerPage = 5;
            return (this.currentPage - 1) * itemsPerPage + index + 1;
        }
    },
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
    name: 'NuxtTableEntityActivity',
}
</script>