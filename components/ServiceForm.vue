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
          <v-btn  class="mt-4" to="/public/services/list_services"><NuxtLink to="/public/services/list_services">Cancelar</NuxtLink></v-btn>
        </v-col>
        <v-col  cols="12" md="6" align="center" justify="center">
          <v-btn @click="submitForm(serviceInfo)" :disabled="!valid" class="mt-4">{{ buttonText }}</v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-form>
</template>
<script>
  import validations from "@/utils/validations";
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        //hasName: false,
        serviceInfo: {
          servicioAportaClienteExterno: '',
          servicio: '',
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasName"]
  }
</script>

<style lang="scss" scoped>
</style>
