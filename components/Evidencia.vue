

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
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Añada una nueva Evidencia
                            </h3>

                            <form @submit.prevent="agregarEvidencia">
                                <div class="form-group">
                                    <label for="fecha" class="form-label">Fecha</label>
                                    <input v-model="nuevaEvidencia.fecha" type="date" id="fecha"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="" required>
                                </div>
                                <div class="form-group">
                                    <label for="resultadoObtenido" class="form-label">Resultados Obtenido</label>
                                    <input v-model="nuevaEvidencia.resultadoObtenido" type="number" id="resultadoObtenido"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Resultado" required>
                                </div>
                                <div class="form-group">
                                    <label for="linkActaEvidencia" class="form-label">link Acta Evidencia</label>
                                    <input v-model="nuevaEvidencia.linkActaEvidencia" type="text" id="linkActaEvidencia"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Link de acta" required>
                                </div>
                                <div class="form-group">
                                    <label for="metaId" class="form-label">Meta id</label>
                                    <input v-model="nuevaEvidencia.metaId" type="number" id="metaId"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el id de la Meta" required>
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
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Editar Evidencia</h3>

                            <form @submit.prevent="actualizarEvidencia">
                                <div class="form-group">
                                    <label for="fecha" class="form-label">Fecha</label>
                                    <input v-model="editarEvidencia.fecha" type="date" id="fecha"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="" required>
                                </div>
                                <div class="form-group">
                                    <label for="resultadoObtenido" class="form-label">Resultados Obtenido</label>
                                    <input v-model="editarEvidencia.resultadoObtenido" type="number" id="resultadoObtenido"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Resultado" required>
                                </div>
                                <div class="form-group">
                                    <label for="linkActaEvidencia" class="form-label">link Acta Evidencia</label>
                                    <input v-model="editarEvidencia.linkActaEvidencia" type="text" id="linkActaEvidencia"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Link de acta" required>
                                </div>
                                <div class="form-group">
                                    <label for="metaId" class="form-label">Meta id</label>
                                    <input v-model="editarEvidencia.metaId" type="number" id="metaId"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Escriba el id de la Meta" required>
                                </div>
                                <!-- Agrega aquí más campos si los necesitas -->
                                <div class="flex justify-between mt-4">
                                    <button type="button" @click="showModal2 = false"
                                        class="btn btn-secondary">Cancelar</button>
                                    <button type="submit" class="btn btn-primary">Actualizar</button>
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
                            <th class="px-6 py-3 font-medium">Fecha</th>
                            <th class="px-6 py-3 font-medium">Resultado Obtenido</th>
                            <th class="px-6 py-3 font-medium">Link Acta Evidencia</th>
                            <th class="px-6 py-3 font-medium">Meta Id</th>
                            <th class="px-6 py-3 text-center font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in itemsForCurrentPage"
                            :key="item.id">
                            <td class="px-6 py-2 border-b border-gray-200 text-sm">{{ item.id }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                formatDate(item.fecha) }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                item.resultadoObtenido }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                item.linkActaEvidencia }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.metaId }}</td>
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
            showModal2: false, // Variable para controlar la visibilidad del modal
            nuevaEvidencia: {
                fecha: '',
                resultadoObtenido: '',
                linkActaEvidencia: '',
                metaId: ''
            },
            editarEvidencia: {
                fecha: '',
                resultadoObtenido: '',
                linkActaEvidencia: '',
                metaId: ''
            },
            metaExist: true,
            showAlertMessage: '',
            showAlertVariant: 'danger', // Puedes cambiar el tipo de alerta si lo deseas
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
        async agregarEvidencia() {
            //no permite guardar si no existe el meta id
            const metaExists = await this.checkMetaExistence(this.nuevaEvidencia.metaId);
            if (!metaExists) {
                // Si el metaId no existe, muestra la advertencia
                this.showAlert('El Meta ID no existe', 'danger');
                return;
            }
            // Preparar los datos del nuevo indicador
            const nuevaEvidenciaData = {
                fecha: this.nuevaEvidencia.fecha,
                resultadoObtenido: this.nuevaEvidencia.resultadoObtenido,
                linkActaEvidencia: this.nuevaEvidencia.linkActaEvidencia,
                metaId: this.nuevaEvidencia.metaId,
            };

            // Realizar una solicitud POST al servidor
            fetch('https://localhost:7100/api/Evidenciums', {
                method: 'POST',
                headers: {
                    "client-platform": "browser",
                    'Content-Type': 'application/json',
                    // Agregar cualquier otro encabezado necesario, como token de autenticación
                },
                body: JSON.stringify(nuevaEvidenciaData) // Convertir los datos a JSON
            })
                .then(response => response.json()) // Convertir la respuesta a JSON
                .then(data => {

                    // Aquí puedes manejar la respuesta del servidor después de crear el indicador
                    console.log('Evidenciacreado:', data);
                    console.log('Respuesta de la API:', data);

                    // Redirigir a la lista de indicadores
                    this.showModal = false;
                    location.reload(); // Recarga la página

                    // Puedes mostrar un mensaje de éxito o realizar otras acciones necesarias
                })
                .catch(error => {
                    // Manejar cualquier error que ocurra durante la solicitud
                    console.error('Error al agregar evidencia:', error);
                    // Puedes mostrar un mensaje de error o realizar acciones de manejo de errores
                });
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
        },
        async actualizarEvidencia() {
            //no permite guardar si no existe el meta id
            const metaExists = await this.checkMetaExistence(this.nuevaEvidencia.metaId);
            if (!metaExists) {
                // Si el metaId no existe, muestra la advertencia
                this.showAlert('El Meta ID no existe', 'danger');

                return;
            }
            try {
                const response = await this.$axios.put(`/Evidenciums/${this.editarEvidencia.id}`, this.editarEvidencia);
                // Cierra el modal después de actualizar
                this.showModal2 = false;
                // Actualiza los datos en el componente sin recargar la página
                this.actualizarDatos(this.editarEvidencia);
                // Recarga la pagina
                //location.reload();
                if (response.status === 201 || response.status === 200) {
                    // Muestra la alerta
                    this.message = 'Evidencia actualizada con éxito';
                    this.variant_response = 'success';
                    this.showAlert();
                } else {
                    this.variant_response = 'danger';
                    this.message = 'Error al actualizar la Evidencia';
                    this.showAlert();
                }
            } catch (error) {
                this.variant_response = 'danger';
                this.message = 'Error al actualizar la Evidencia';
                this.showAlert();
                console.error('Error al actualizar la Evidencia:', error);
            }
        },
        async deleteItem(itemId) {
            // Aquí se debería manejar la lógica de eliminación
            console.log(`Eliminar evidencia con ID: ${itemId}`)
            await this.$axios.delete(`/Evidenciums/${itemId}`).then((response) => {
                if (response.status === 204 || response.status === 200) {
                    this.message = 'Evidencia eliminada con exito';
                    this.variant_response = 'success';
                    this.showAlert();
                    setTimeout(() => {
                        location.reload()
                    }, "2000");
                } else {
                    this.variant_response = 'danger';
                    this.message =
                        'Error al eliminar la Evidencia';
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
        async checkMetaExistence(metaId) {
            try {
                const response = await this.$axios.get(`/Metums/${metaId}`);
                return response.status === 200;
            } catch (error) {
                console.error('Error checking meta existence:', error);
                location.reload()
                return false;
            }
        },
        formatDate(dateString) {
            const date = new Date(dateString); // Crea un objeto de fecha a partir de la cadena
            const formattedDate = date.toISOString().split('T')[0]; // Formatea la fecha como 'YYYY-MM-DD'
            return formattedDate;
        },
        totalPages() {
            const itemsPerPage = 5; // Cambia esto al número deseado de elementos por página
            return Math.ceil(this.items.length / itemsPerPage);
        },
        setCurrentPage(page) {
            const totalPages = this.totalPages();
            this.currentPage = Math.min(Math.max(page, 1), totalPages);
        },
        saveNewItem() {
            this.showModal = false;
        },
        editItem(item) {
            // Aquí se debería manejar la lógica de edición
            console.log(`Editar entidad con ID: ${item.id}`)
        },
        createNewItem() {
            // Aquí se debería manejar la lógica de creación de nueva entidad

        },
        openEditModal(item) {
            this.editarEvidencia = { ...item }; // Copia los datos del item en el formulario de edición
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
    name: 'EvidenciaTable',
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
