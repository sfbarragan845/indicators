<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.nombre" label="Name" :rules="[required('nombre')]" v-if="hasName" />
    <v-text-field v-model="userInfo.apellido" label="Apellido" :rules="[required('apellido')]" v-if="hasName" />
    <v-text-field v-model="userInfo.name" label="User Name" :rules="[required('name')]" v-if="hasName" />

    <v-text-field v-model="userInfo.correoElectronico" label="Email"
      :rules="[required('correoElectronico'), emailFormat()]" />

    <v-text-field autocomplete="current-password" v-model="userInfo.password" label="Password"
      :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword" counter=true
      :rules="[required('password'), minLength('password', 8)]" />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
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
      userInfo: {
        nombre: '',
        apellido: '',
        name: '',
        correoElectronico: '',
        password: '',
      },
      ...validations
    }
  },
  props: ["submitForm", "buttonText", "hasName"]
}
</script>

<style lang="scss" scoped></style>
