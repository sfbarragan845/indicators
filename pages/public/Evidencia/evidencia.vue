<template>
  <main id="evidencia">
      <header>
          <Menu />
      </header>
      
      <section class="container px-4 sm:px-8">
          <div class="py-4">
              <b-navbar-brand class="text-indigo-500 hover:text-indigo-600 inline-flex align-center gap-x-4" href="/">
                <ReturnIcon />
                <h1 class="text-lg font-bold">Evidencia</h1>
              </b-navbar-brand>
            </div>
            <h1 class="italic text-sm subpixel-antialiased text-gray-400">Evidencia</h1>
          <Evidencia :items="entities"/>
      </section>
      

  </main>
  
</template>
<script>

import Evidencia from '~/components/Evidencia.vue';
import icons from '~/icons';


export default {
components: {
  Evidencia,

  ReturnIcon: icons.return
},
mounted() {
  this.listServices();
},
methods: {
  async listServices() {
      const token = "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYnlzb2RldiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImJhc29sb3J6YW5vMUBlc3BlLmVkdS5lYyIsImV4cCI6MTY5Mjg1MjM2MH0.6JQD7P69m-WcSa7mYxqUSexiRr9l1qgBFeAm3N0uisQ"; 

      const response = await fetch('https://localhost:7100/api/Evidenciums', {
        method: "GET",
        headers: {
          "client-platform": "browser",
          "Content-Type": "application/json",
          "Authorization": token
        }
      });
      const data = await response.json()
      this.entities = data;
  }
},
data(){
  return{
    entities:[]
  };
  }
};
</script>