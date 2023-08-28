<template>
  <v-form v-model="valid">
    <v-card  fill-height fluid class="mx-auto my-12 p-5" max-width="500">
      <v-row align="center" justify="center">
        <v-col  cols="12" md="12">
          <v-text-field v-model="serviceInfo.servicioAportaClienteExterno"
                  label="Nombre Servicio"
                  :rules="[required('servicioAportaClienteExterno')]"
                  v-if="hasName" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col  cols="12" md="6" align="center" justify="center">
          <v-btn  class="mt-4" to="/public/services/"><NuxtLink to="/public/services/list_services">Cancelar</NuxtLink></v-btn>
        </v-col>
        <v-col  cols="12" md="6" align="center" justify="center">
          <v-btn @click="submitForm(serviceInfo)" :disabled="!valid"  v-if="hasName" class="text-none mb-4 mt-4 red--text"
          color="#b80000"
          size="medium"
          variant="outlined" ><span class = "text-white">{{ buttonText }}</span></v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-form>
</template>
<script>
  import validations from "@/utils/validations";

  let data_service;
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        serviceInfo: {
          servicioAportaClienteExterno: '',
          servicio: '',
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasName", "id_service"],

    methods:{
      async  load_data(id_service){
        await this.$axios.get(`/Servicios/${id_service}`).then(response => {
          this.data_service = response.data;
        })
      }
    },

    async beforeMount() {
      if(this.id_service != '0'){
        await this.load_data(this.id_service)
        this.serviceInfo.servicioAportaClienteExterno = this.data_service.servicioAportaClienteExterno;
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
