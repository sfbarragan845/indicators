<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/public/Indicador/indicador">Indicador</b-navbar-brand>
      <b-navbar-brand href="/public/services/list_services">Servicio</b-navbar-brand>
      <b-navbar-brand href="/public/Actividad/actividad">Actividad</b-navbar-brand>
      <b-navbar-brand href="/public/Cumplimiento/cumplimiento">Cumplimiento</b-navbar-brand>
      <b-navbar-brand href="/public/Meta/meta">Meta</b-navbar-brand>
      <b-navbar-brand href="/public/Evidencia/evidencia">Evidencia</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <v-spacer />
            <b-navbar-brand v-if="$auth.loggedIn">
              Welcome !! {{$auth.user}}
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
