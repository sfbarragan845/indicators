<template>
  <main id="activities">
    <header>
      <Menu />
    </header>
    <section class="container px-4 sm:px-8">
      <div class="py-5">
        <p class="text-center text-3xl text-indigo-500 font-bold">📑 Listado 📑</p>
      </div>
      <TableEntityActivity :items="filterRows">
        <input v-model="search"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-searcg" type="text" placeholder="Search">
      </TableEntityActivity>
    </section>
  </main>
</template>

<script>
import icons from '~/icons';
import TableEntityActivity from '~/components/TableEntityActivity.vue';
import { listActivity, getAllIndicators, getAllServices } from './api';

export default {
  components: {
    TableEntityActivity,
    ReturnIcon: icons.return,
    AddIcon: icons.add,
  },
  async mounted() {
    this.entities = await listActivity();
    this.services = await getAllServices();
    this.indicator = await getAllIndicators();
    this.innerData = this.innerReference();
    console.log(this.innerData);
  },
  methods: {
    innerReference() {
      // Utiliza el método `map` para crear y retornar un nuevo arreglo
      return this.entities.map(entity => {
        const matchingIndicator = this.indicator.find(ind => ind.id === entity.indicadorId);
        return {
          entity,
          service: this.services.find(serv => serv.id === entity.servicioId),
          indicator: matchingIndicator
        };
      });
    }
  },
  data() {
    return {
      indicator: [],
      services: [],
      entities: [],
      innerData: [],
      search: ''
    };
  },
  computed: {
    filterRows: function () {
      return this.innerData.filter((result) => {
        // Cambia 'key1' y 'key2' por las claves que deseas comparar
        return result.entity.url.match(this.search) ||
          result.entity.tipoActividad.match(this.search) ||
          result.indicator.nombre.match(this.search) ||
          result.service.nombre.match(this.search);
      });
    }
  },
  name: 'NuxtServices',
}
</script>
