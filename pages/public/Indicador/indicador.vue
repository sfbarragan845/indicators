<template>
  <main id="services">
    <header>
      <Menu />
    </header>

    <section class="container px-4 sm:px-8">

      <section class="container px-4 sm:px-8">
        <div class="py-5">
          <p class="text-center text-3xl text-indigo-500 font-bold">📑 Listado 📑</p>
        </div>
        <h1 class="italic text-sm subpixel-antialiased text-gray-400">Lista de Indicadores</h1>
        <TableView :items="entities" />
      </section>
      
    </section>


  </main>
</template>

<script>
import TableView from '~/components/TableView.vue';
import icons from '~/icons';

export default {
  components: {
    TableView,
    ReturnIcon: icons.return
  },
  data() {
    return {
      entities: []
    }
  },
  mounted() {
    this.listIndicador();
  },
  methods: {
    async listIndicador() {
      await this.$axios.get('/Indicadors').then(response => {
        this.entities = response.data;
      })
    }
  },
  name: 'NuxtIndicador',
}

</script>
