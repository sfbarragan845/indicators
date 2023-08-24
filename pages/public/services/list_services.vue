<template>
  <main id="services">
    <header>
      <Menu />
    </header>
    <section class="container px-4 sm:px-8">
      <div class="py-4">
        <b-navbar-brand class="text-indigo-500 hover:text-indigo-600 inline-flex align-center gap-x-4" href="/">
          <ReturnIcon />
          <h1 class="text-lg font-bold">Servicios</h1>
        </b-navbar-brand>
      </div>
      <h1 class="italic text-sm subpixel-antialiased text-gray-400">Lista de Entidades</h1>
      <TableEntity :items="data_service" />
    </section>
  </main>
</template>

<script>

import icons from '~/icons';

import TableEntity from '~/components/TableEntityService.vue';

let data_service;
export default {
  components: {
    TableEntity,
    ReturnIcon: icons.return
  },
  data() {
    return {
      data_service
    }
  },
  name: 'NuxtActivities',

  methods:{
    async  loadData(){
      await this.$axios.get('/Servicios').then(response => {
        this.data_service = response.data;
      })
    }
  },
  beforeMount() {
    this.loadData()
  },
}
</script>
