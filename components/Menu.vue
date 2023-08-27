<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="flex items-center space-x-4">
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Indicador/indicador"
        >
          <b>Indicador</b>
        </NuxtLink>
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/services/list_services"
        >
          <b>Servicio</b></NuxtLink
        >
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Actividad"
        >
          <b>Actividad</b>
        </NuxtLink>
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Cumplimiento/cumplimiento"
        >
          <b>Servicio</b>
        </NuxtLink>
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Meta/meta"
        >
          <b>Meta</b>
        </NuxtLink>
        <NuxtLink
          class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Evidencia/evidencia"
        >
          <b>Evidencia</b>
        </NuxtLink>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <v-spacer />
        <b-navbar-brand v-if="$auth.loggedIn">
          {{ $auth.user }} <b-avatar></b-avatar>
          <!-- username
              logout button -->
        </b-navbar-brand>
        <div v-else>
          <!-- login
              registration -->
          <v-btn text to="/login" color="#F8F9F9" size="small">Sing In</v-btn>
          <v-btn text to="/register" color="#F8F9F9" size="small">Sing Up</v-btn>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NuxtMenu',

}
</script>
