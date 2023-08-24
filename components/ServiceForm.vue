<template>
  <v-form v-model="valid">
    <v-text-field v-model="serviceInfo.servicioAportaClienteExterno"
                  label="Nombre Servicio"
                  :rules="[required('servicioAportaClienteExterno')]"
                  v-if="hasName" />
    <v-btn @click="submitForm(serviceInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
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
