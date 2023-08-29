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
            <div class=" items-center py-2">
                <button @click="showModal = true"
                    class="inline-flex align-items-center gap-x-2 px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    <AddIcon /> <span>Nuevo</span>
                </button>
            </div>
            <transition enter-active-class="transition ease-out duration-300"
                leave-active-class="transition ease-in duration-200">
                <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="fixed inset-0 transition-opacity" @click="showModal = false">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 scrollable-modal-content">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Agregar Indicador</h3>

                            <form @submit.prevent="agregarIndicador">
                                <div class="form-group">
                                    <label for="codigo" class="form-label">Codigo</label>
                                    <input v-model="nuevoIndicador.codigo" type="text" id="codigo"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Codigo" required>
                                </div>
                                <div class="form-group">
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <input v-model="nuevoIndicador.nombre" type="text" id="nombre"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Nombre" required>
                                </div>
                                <div class="form-group">
                                    <label for="formula" class="form-label">Formula</label>
                                    <input v-model="nuevoIndicador.formula" type="text" id="formula"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Formula" required>
                                </div>
                                <div class="form-group">
                                    <label for="descripcion" class="form-label">Descripcion</label>
                                    <textarea v-model="nuevoIndicador.descripcion" type="text" id="descripcion"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Descripcion" rows="4" cols="50" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="fechaInicioMedicion" class="form-label">Fecha de Inicio Medicion</label>
                                    <input v-model="nuevoIndicador.fechaInicioMedicion" type="date" id="fechaInicioMedicion"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="YYYY-MM-DD" required>
                                </div>
                                <div class="form-group">
                                    <label for="reportaA" class="form-label">Reporta </label>
                                    <input v-model="nuevoIndicador.reportaA" type="text" id="reportaA"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Reporte" required>
                                </div>
                                <div class="form-group">
                                    <label for="lineaBase" class="form-label">Linea Base </label>
                                    <input v-model="nuevoIndicador.lineaBase" type="number" id="lineaBase"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Linea Base" required>
                                </div>
                                <div class="form-group">
                                    <label for="comportamiento" class="form-label">Comportamiento </label>
                                    <input v-model="nuevoIndicador.comportamiento" type="text" id="comportamiento"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Comportamiento" required>
                                </div>
                                <div class="form-group">
                                    <label for="unidadMedida" class="form-label">Unidad de Medida </label>
                                    <input v-model="nuevoIndicador.unidadMedida" type="text" id="unidadMedida"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Unidad de Medida" required>
                                </div>
                                <div class="form-group">
                                    <label for="sentidoMedicion" class="form-label">Sentido de Medicion </label>
                                    <input v-model="nuevoIndicador.sentidoMedicion" type="text" id="sentidoMedicion"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Sentido Medición" required>
                                </div>
                                <div class="form-group">
                                    <label for="denominador" class="form-label">Denominador </label>
                                    <input v-model="nuevoIndicador.denominador" type="number" id="denominador"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-600 light:border-gray-500 light:placeholder-gray-400 light:text-white"
                                        placeholder="Denominador" required>
                                </div>
                                <!-- Agrega aquí más campos si los necesitas -->
                                <div class="flex justify-end mt-4">
                                    <button type="button" @click="showModal = false"
                                        class="btn btn-secondary">Cancelar</button>
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Modal para actualizar indicador -->
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
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Editar Indicador</h3>

                            <form @submit.prevent="actualizarIndicador">

                                <!-- Agrega aquí más campos si los necesitas -->
                                <div class="flex justify-between mt-4">
                                    <button type="button" @click="showModal2 = false"
                                        class="btn btn-secondary">Cancelar</button>
                                    <button type="submit" @click="actualizarIndicador"
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
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in itemsForCurrentPage"
                            :key="item.id">
                            <td class="px-6 py-2 border-b border-gray-200 text-sm">{{ item.id }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.codigo }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.nombre }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.formula }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">
                                <template v-if="item.descripcion.length > 20 && !expandedDescriptions.includes(item.id)">
                                    {{ item.descripcion.slice(0, 20) + '...' }}
                                    <button @click="toggleDescriptionExpansion(item.id)"
                                        class="text-blue-500 hover:underline ml-2">
                                        Leer más
                                    </button>
                                </template>
                                <template v-else>
                                    {{ item.descripcion }}
                                    <button @click="toggleDescriptionExpansion(item.id)"
                                        class="text-blue-500 hover:underline ml-2">
                                        Leer menos
                                    </button>
                                </template>
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                item.fechaInicioMedicion }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.reportaA }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.lineaBase }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                item.comportamiento }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.unidadMedida
                            }}
                            </td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{
                                item.sentidoMedicion }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.denominador }}
                            </td>
                            <td
                                class="px-6 inline-flex w-full justify-center gap-x-4 py-2 whitespace-no-wrap border-b border-gray-200 text-sm text-center">
                                <button @click="openEditModal(item)"
                                    class="inline-block px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600">
                                    <EditIcon />
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



    <!-- ... (botón para agregar indicador y modal para agregar indicador) ... -->
</template>
  
<script>
import icons from '~/icons';
import Swal from 'sweetalert2';

export default {
    components: {
        ReturnIcon: icons.return
    },
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
            nuevoIndicador: {
                codigo: '',
                nombre: '',
                formula: '',
                descripcion: '',
                fechaInicioMedicion: '',
                reportaA: '',
                lineaBase: '',
                comportamiento: '',
                unidadMedida: '',
                sentidoMedicion: '',
                denominador: ''
            },
            editarIndicador: {
                codigo: '',
                nombre: '',
                formula: '',
                descripcion: '',
                fechaInicioMedicion: '',
                reportaA: '',
                lineaBase: '',
                comportamiento: '',
                unidadMedida: '',
                sentidoMedicion: '',
                denominador: ''
            },
            expandedDescriptions: []
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
        agregarIndicador() {
            // Preparar los datos del nuevo indicador
            const nuevoIndicadorData = {
                codigo: this.nuevoIndicador.codigo,
                nombre: this.nuevoIndicador.nombre,
                formula: this.nuevoIndicador.formula,
                descripcion: this.nuevoIndicador.descripcion,
                fechaInicioMedicion: this.nuevoIndicador.fechaInicioMedicion,
                reportaA: this.nuevoIndicador.reportaA,
                lineaBase: this.nuevoIndicador.lineaBase,
                comportamiento: this.nuevoIndicador.comportamiento,
                unidadMedida: this.nuevoIndicador.unidadMedida,
                sentidoMedicion: this.nuevoIndicador.sentidoMedicion,
                denominador: this.nuevoIndicador.denominador
            };

            // Realizar una solicitud POST al servidor
            fetch('https://localhost:7100/api/Indicadors', {
                method: 'POST',
                headers: {
                    "client-platform": "browser",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoIndicadorData)
            })
                .then(response => response.json())
                .then(data => {
                    // Mostrar la alerta de SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: 'Indicador creado',
                        timer: 3000, // Tiempo en milisegundos
                        showConfirmButton: false
                    });

                    // Agregar un retraso de 3 segundos antes de redirigir
                    setTimeout(() => {
                        console.log('Indicador Creado:', data)
                        this.$router.push('indicador');
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error al agregar indicador:', error);
                    // Puedes mostrar un mensaje de error o realizar acciones de manejo de errores
                });
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
        },
        openUpdateModal(indicador) {
            this.indicadorAActualizar = { ...indicador };
            this.showUpdateModal = true;
        },
        async actualizarIndicador() {
            try {
                const response = await this.$axios.put(`/Indicadors/${this.editarIndicador.id}`, this.editarIndicador);
                // Cierra el modal después de actualizar
                this.showModal2 = false;
                // Actualiza los datos en el componente sin recargar la página
                this.actualizarDatos(this.editarIndicador);
                // Recarga la pagina
                //location.reload();
                if (response.status === 201 || response.status === 200) {
                    // Muestra la alerta
                    this.message = 'Indicador actualizado con éxito';
                    this.variant_response = 'success';
                    this.showAlert();
                } else {
                    this.variant_response = 'danger';
                    this.message = 'Error al actualizar el Indicador';
                    this.showAlert();
                }
            } catch (error) {
                this.variant_response = 'danger';
                this.message = 'Error al actualizar el Indicador';
                this.showAlert();
                console.error('Error al actualizar el Indicador:', error);
            }
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
        toggleDescriptionExpansion(itemId) {
            if (this.expandedDescriptions.includes(itemId)) {
                // Si ya está expandida, la cerramos
                const index = this.expandedDescriptions.indexOf(itemId);
                this.expandedDescriptions.splice(index, 1);
            } else {
                // Si no está expandida, la abrimos
                this.expandedDescriptions.push(itemId);
            }
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
};
</script>
  
<style>
.scrollable-modal-content {
    max-height: 70vh;
    /* Ajusta esta altura máxima según tus necesidades */
    overflow-y: auto;
}
.text-blue-500 {
    color: #3b82f6;
}
.hover\:underline:hover {
    text-decoration: underline;
}

/* Estilo para descripciones truncadas */
.truncated-description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>


  