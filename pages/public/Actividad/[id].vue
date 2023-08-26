<template>
    <main id="activities">
        <header>
            <Menu />
        </header>
        <section class="container px-4 sm:px-8">
            <div class="py-4">
                <NuxtLink class="text-indigo-500 hover:text-indigo-600 inline-flex align-center gap-x-4"
                    to="/public/Actividad">
                    <ReturnIcon />
                    <h1 class="text-lg font-bold">Actividades</h1>
                </NuxtLink>
            </div>
            <p class="text-3xl text-indigo-500 font-bold">Formulario Actividades</p>
            <form @submit.prevent="saveActivityData" class="mt-8">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="url" class="block text-gray-700 text-sm font-bold mb-2">URL</label>
                        <input :required="true" min="5" max="1000" v-model="formData.url" type="text" id="url"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="fechaCreacion" class="block text-gray-700 text-sm font-bold mb-2">Fecha Creación</label>
                        <input :required="true" v-model="formData.fechaCreacion" type="date" id="fechaCreacion"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="correoElectronico" class="block text-gray-700 text-sm font-bold mb-2">Correo
                            Electrónico</label>
                        <input :required="true" max="50" v-model="formData.correoElectronico" type="email"
                            id="correoElectronico"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="tipoActividad" class="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
                        <input :required="true" max="50" v-model="formData.tipoActividad" type="text" id="tipoActividad"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="unidades" class="block text-gray-700 text-sm font-bold mb-2">Unidades</label>
                        <input :required="true" max="50" v-model="formData.unidades" type="text" id="unidades"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="responsable" class="block text-gray-700 text-sm font-bold mb-2">Responsable</label>
                        <input :required="true" max="50" v-model="formData.responsable" type="text" id="responsable"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                    </div>
                    <div>
                        <label for="responsable" class="block text-gray-700 text-sm font-bold mb-2">Indicador</label>
                        <select :required="true" v-model="formData.indicadorId" id="indicadorId"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                            <option :disabled="true" value="">Seleccionar una opción</option>
                            <option v-for="option in optionsIndicators" :key="option.id" :value="option.id"
                                :selected="option.id == selectedIndicator">
                                {{ option.nombre }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label for="responsable" class="block text-gray-700 text-sm font-bold mb-2">Servicio</label>
                        <select :required="true" v-model="formData.servicioId" id="serviceId"
                            class="w-full rounded-lg p-2 border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                            <option :disabled="true" value="">Seleccionar una opción</option>
                            <option v-for="option in optionsServices" :key="option.id" :value="option.id"
                                :selected="option.id == selectedService">
                                {{ option.nombre }}
                            </option>
                        </select>
                    </div>
                </div>
                <button type="submit"
                    class="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                    {{ formData.id != 0 ? 'Actualizar' : 'Registrar' }}
                </button>
            </form>
        </section>
    </main>
</template>
  
<script>
import icons from '~/icons';
import { getActivityById, getAllIndicators, getAllServices, saveActivity } from './api';

const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYnlzb2RldiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImJhc29sb3J6YW5vMUBlc3BlLmVkdS5lYyIsImV4cCI6MTY5MzAwMjE0M30.OW_4eCMoltvdc8CK6FMI0RZBKItIJiS1m-TB8F9-Hhc"
export default {
    components: {
        ReturnIcon: icons.return,
    },
    data() {
        return {
            optionsIndicators: [], // Initialize as an empty array
            selectedIndicator: 0,
            selectedService: 0,  // Valor seleccionado del select
            optionsServices: [], // Initialize as an empty array

            formData: {
                id: 0,
                indicadorId: "",
                servicioId: "",
            }
        }
    },
    async mounted() {
        const param = this.$route.params.id;
        this.optionsIndicators = await getAllIndicators(this.optionsIndicators, token);
        this.optionsServices = await getAllServices(this.optionsServices, token);
        if (param != 0) {
            this.formData = await getActivityById(param, this.formData, this.selectedIndicator, this.selectedService, token);
        };
    },
    methods: {
        async saveActivityData() {
            await saveActivity(this.formData, this.$router, token);
        }
    },
    name: 'NuxtCUServices',
}
</script>
  