<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/actividad/:activities">Actividad</b-navbar-brand>
      <b-navbar-brand href="#">Indicador</b-navbar-brand>
      <b-navbar-brand href="/servicio">Servicio</b-navbar-brand>

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
