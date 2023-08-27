<template>
  <v-form v-model="valid">
    <v-card fill-height fluid class="mx-auto my-12 p-5" max-width="500">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
            v-model="userInfo.nombre" label="Nombre"
            :rules="[required('nombre')]" v-if="hasName"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          v-model="userInfo.apellido" label="Apellido" :rules="[required('apellido')]" v-if="hasName"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          v-model="userInfo.name" label="Username" :rules="[required('name')]" v-if="hasName"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          v-model="userInfo.correoElectronico" label="Email"
          :rules="[required('correoElectronico'), emailFormat()]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          autocomplete="current-password" v-model="userInfo.password" label="Password"
          :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword" counter=true
          :rules="[required('password'), minLength('password', 8)]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mt-5">
        <v-col cols="12"
          md="8">
          <v-btn @click="submitForm(userInfo)" :disabled="!valid" block
          class="text-none mb-4 red--text"
          color="#b80000"
          size="medium"
          variant="outlined"><span class = "text-white">
            {{ buttonText }}
        </span></v-btn>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="12"
          align="center" justify="center"
        >
        <NuxtLink to="/login">
          <span class = "text-primary text-sm" v-if="hasName">
            <u>Ya tengo una cuenta</u>
          </span>
        </NuxtLink>
        <NuxtLink to="/register">
          <span class = "text-primary text-sm" v-if="!hasName">
            <u>Crear una nueva cuenta</u>
          </span>
        </NuxtLink>
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
