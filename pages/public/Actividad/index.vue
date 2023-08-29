<template>
  <main id="activities">
    <header>
      <Menu />
    </header>
    <section class="container px-4 sm:px-8">
      <div class="py-5">
        <p class="text-center text-3xl text-indigo-500 font-bold">📑 Listado 📑</p>
      </div>
      <TableEntityActivity :items="innerData" />
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
    };
  },
  name: 'NuxtServices',
}
</script>
