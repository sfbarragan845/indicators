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

const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYnlzb2RldiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImJhc29sb3J6YW5vMUBlc3BlLmVkdS5lYyIsImV4cCI6MTY5MzAwNTQ2OX0.dTQJFAgMqGGt62XZR6UKNEcoclOtc7SwDuwdqqD2wx8"

export default {
  components: {
    TableEntityActivity,
    ReturnIcon: icons.return,
    AddIcon: icons.add,
  },
  async mounted() {
    this.entities = await listActivity(token);
    this.services = await getAllServices(token);
    this.indicator = await getAllIndicators(token);
    this.innerData = this.innerReference();
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
