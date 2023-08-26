<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="flex items-center space-x-4">
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Indicador/indicador">
          Indicador
        </NuxtLink>
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/services/list_services">
          Servicio</NuxtLink>
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Actividad">
          Actividad
        </NuxtLink>
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Cumplimiento/cumplimiento">
          Cumplimiento
        </NuxtLink>
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Meta/meta">
          Meta
        </NuxtLink>
        <NuxtLink class="text-gray-50 hover:text-gray-300 transition duration-300 hover:no-underline"
          to="/public/Evidencia/evidencia">
          Evidencia
        </NuxtLink>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <v-spacer />
        <b-navbar-brand v-if="$auth.loggedIn">
          Welcome !! {{ $auth.user }}
          <!-- username
              logout button -->
        </b-navbar-brand>
        <div v-else>
          <!-- login
              registration -->
          <v-btn text to="/login">Login</v-btn>
          <v-btn text to="/register">Register</v-btn>
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
