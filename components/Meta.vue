

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
                <button @click="showModal = true"
                    class="inline-flex align-items-center gap-x-2 px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    <AddIcon /> <span>Nuevo</span>
                </button>
            </div>

            <!-- Modal  NUEVO -->
            <transition enter-active-class="transition ease-out duration-300"
                leave-active-class="transition ease-in duration-200">
                <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="fixed inset-0 transition-opacity" @click="showModal = false">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
                        <!-- Contenido del modal -->
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Añada una nueva Meta</h3>

                            <form @submit.prevent="agregarMeta">
                                <div class="form-group">
                                    <label for="periodo" class="form-label">Periodo</label>
                                    <input v-model="nuevaMeta.periodo" type="text" id="periodo"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Periodo" required>
                                </div>
                                <div class="form-group">
                                    <label for="anio" class="form-label">Año</label>
                                    <select v-model="nuevaMeta.anio" id="anio"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        required>
                                        <option value="">Seleccione un año</option>
                                        <!-- Generate options for years from 2000 to 2050 -->
                                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="meta" class="form-label">Meta</label>
                                    <input v-model="nuevaMeta.meta" type="number" id="meta"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el número de Meta" required>
                                </div>
                                <div class="form-group">
                                    <label for="metaTruncada" class="form-label">Meta Truncada</label>
                                    <input v-model="nuevaMeta.metaTruncada" type="number" id="metaTruncada"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el número de Meta Truncada" required>
                                </div>
                                <div class="form-group">
                                    <label for="indicadorId" class="form-label">Indicador</label>
                                    <input v-model="nuevaMeta.indicadorId" type="number" id="indicadorId"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Id del indicador" required>
                                </div>
                                <!-- Agrega aquí más campos si los necesitas -->
                                <div class="flex justify-between mt-4">
                                    <button type="button" @click="showModal = false"
                                        class="btn btn-secondary">Cancelar</button>
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Modal  EDITAR -->
            <transition enter-active-class="transition ease-out duration-300"
                leave-active-class="transition ease-in duration-200">
                <div v-if="showModal2" class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="fixed inset-0 transition-opacity" @click="showModal2 = false">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
                        <!-- Contenido del modal -->
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Editar Meta</h3>

                            <form @submit.prevent="actualizarMeta">
                                <div class="form-group">
                                    <label for="periodo" class="form-label">Periodo</label>
                                    <input v-model="editarMeta.periodo" type="text" id="periodo"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Periodo" required>
                                </div>
                                <div class="form-group">
                                    <label for="anio" class="form-label">Año</label>
                                    <select v-model="editarMeta.anio" id="anio"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        required>
                                        <option value="">Seleccione un año</option>
                                        <!-- Generate options for years from 2000 to 2050 -->
                                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="meta" class="form-label">Meta</label>
                                    <input v-model="editarMeta.meta" type="number" id="meta"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el número de Meta" required>
                                </div>
                                <div class="form-group">
                                    <label for="metaTruncada" class="form-label">Meta Truncada</label>
                                    <input v-model="editarMeta.metaTruncada" type="number" id="metaTruncada"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el número de Meta Truncada" required>
                                </div>
                                <div class="form-group">
                                    <label for="indicadorId" class="form-label">Indicador</label>
                                    <input v-model="editarMeta.indicadorId" type="number" id="indicadorId"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Id del indicador" required>
                                </div>
                                <!-- Agrega aquí más campos si los necesitas -->
                                <div class="flex justify-between mt-4">
                                    <button type="button" @click="showModal2 = false"
                                        class="btn btn-secondary">Cancelar</button>
                                    <button type="submit" @click="actualizarMeta"
                                        class="btn btn-primary">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-xl overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase">
                            <th class="px-6 py-3 font-medium">Nro</th>
                            <th class="px-6 py-3 font-medium">Periodo</th>
                            <th class="px-6 py-3 font-medium">Año</th>
                            <th class="px-6 py-3 font-medium">Meta</th>
                            <th class="px-6 py-3 font-medium">Meta_truncada</th>
                            <th class="px-6 py-3 font-medium">Indicador</th>
                            <th class="px-6 py-3 text-center font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in itemsForCurrentPage"
                            :key="item.id">
                            <td class="px-6 py-2 border-b border-gray-200 text-sm">{{ item.id }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.periodo }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.anio }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.meta }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.metaTruncada
                            }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.indicadorId }}
                            </td>
                            <td
                                class="px-6 inline-flex w-full justify-center gap-x-4 py-2 whitespace-no-wrap border-b border-gray-200 text-sm text-center">
                                <button @click="openEditModal(item)"
                                    class="inline-block px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600">
                                    <EditIcon />
                                </button>
                                <button @click="deleteItem(item.id)"
                                    class="inline-block px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-red-500 hover:bg-red-600">
                                    <DeleteIcon />
                                </button>
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


<script>
import icons from '~/icons';

export default {

    data() {
        return {
            currentPage: 1, // Cambia el valor inicial según tus necesidades
            message: '',
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            variant_response: 'success',
            itemId: this.$route.params.id,
            showModal: false, // Variable para controlar la visibilidad del modal
            showModal2: false, // Variable para controlar la visibilidad del modal2
            years: Array.from({ length: 51 }, (_, index) => 2000 + index),
            nuevaMeta: { //agregarMeta
                periodo: '',
                anio: '',
                meta: '',
                metaTruncada: '',
                indicadorId: '',
            },
            editarMeta: { //editarrMeta
                periodo: '',
                anio: '',
                meta: '',
                metaTruncada: '',
                indicadorId: '',
            },
        };
    },
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
    methods: {
        agregarMeta() {
            // Preparar los datos del nuevo indicador
            const nuevaMetaData = {
                periodo: this.nuevaMeta.periodo,
                anio: this.nuevaMeta.anio,
                meta: this.nuevaMeta.meta,
                metaTruncada: this.nuevaMeta.metaTruncada,
                indicadorId: this.nuevaMeta.indicadorId
            };
            // Realizar una solicitud POST al servidor
            fetch('https://localhost:7100/api/Metums', {
                method: 'POST',
                headers: {
                    "client-platform": "browser",
                    'Content-Type': 'application/json',
                    // Agregar cualquier otro encabezado necesario, como token de autenticación
                },
                body: JSON.stringify(nuevaMetaData) // Convertir los datos a JSON
            })
                .then(response => response.json()) // Convertir la respuesta a JSON
                .then(data => {

                    // Aquí puedes manejar la respuesta del servidor después de crear el indicador
                    console.log('Meta creado:', data);
                    console.log('Respuesta de la API:', data);

                    // Redirigir a la lista de indicadores
                    this.showModal = false;
                    location.reload(); // Recarga la página

                    // Puedes mostrar un mensaje de éxito o realizar otras acciones necesarias
                })
                .catch(error => {
                    // Manejar cualquier error que ocurra durante la solicitud
                    console.error('Error al agregar indicador:', error);
                    // Puedes mostrar un mensaje de error o realizar acciones de manejo de errores
                });
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
        },
        async actualizarMeta() {
            try {
                const response = await this.$axios.put(`/Metums/${this.editarMeta.id}`, this.editarMeta);
                // Cierra el modal después de actualizar
                this.showModal2 = false;
                // Actualiza los datos en el componente sin recargar la página
                this.actualizarDatos(this.editarMeta);
                // Recarga la pagina
                //location.reload();
                if (response.status === 201 || response.status === 200) {
                    // Muestra la alerta
                    this.message = 'Meta actualizada con éxito';
                    this.variant_response = 'success';
                    this.showAlert();
                } else {
                    this.variant_response = 'danger';
                    this.message = 'Error al actualizar la meta';
                    this.showAlert();
                }
            } catch (error) {
                this.variant_response = 'danger';
                this.message = 'Error al actualizar la meta';
                this.showAlert();
                console.error('Error al actualizar la meta:', error);
            }
        },
        async deleteItem(itemId) {
            // Aquí se debería manejar la lógica de eliminación
            console.log(`Eliminar entidad con ID: ${itemId}`)
            await this.$axios.delete(`/Metums/${itemId}`).then((response) => {
                if (response.status === 204 || response.status === 200) {
                    this.message = 'Meta eliminado con exito';
                    this.variant_response = 'success';
                    this.showAlert();
                    setTimeout(() => {
                        location.reload()
                    }, "2000");
                } else {
                    this.variant_response = 'danger';
                    this.message =
                        'Error al eliminar el Meta';
                    this.showAlert();
                }
            }).catch((error) => {
                if (error.response && error.response.status === 400) {
                    this.variant_response = 'danger';
                    this.message = 'Error al eliminar el Meta';
                    this.showAlert();
                }
            });
        },
        totalPages() {
            const itemsPerPage = 5; // Cambia esto al número deseado de elementos por página
            return Math.ceil(this.items.length / itemsPerPage);
        },
        setCurrentPage(page) {
            const totalPages = this.totalPages();
            this.currentPage = Math.min(Math.max(page, 1), totalPages);
        },
        openEditModal(item) {
            this.editarMeta = { ...item }; // Copia los datos del item en el formulario de edición
            this.showModal2 = true; // Abre el modal de edición
        },
        actualizarDatos(updatedItem) {
            // Busca el índice del elemento actualizado en la lista de items
            const index = this.items.findIndex(item => item.id === updatedItem.id);
            if (index !== -1) {
                // Actualiza el elemento en la lista con los nuevos datos
                this.items.splice(index, 1, updatedItem);
            }
        },
    },
    name: 'MetaTable',
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
