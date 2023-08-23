<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/actividad/:activities">Actividad</b-navbar-brand>
      <b-navbar-brand href="#">Indicador</b-navbar-brand>
      <b-navbar-brand href="/servicio">Servicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <v-spacer />
            <div v-if="$auth.loggedIn">
              {{$auth.user.email}}
              <!-- username
              logout button -->
            </div>
            <div v-else>
              <!-- login
              registration -->
              <v-btn text to="/public/loging/loging">Login</v-btn>
              <v-btn text to="/public/loging/loging">Register</v-btn>
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
