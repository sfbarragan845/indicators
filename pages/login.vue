<template>
  <div>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />

    <v-btn text to="/register">Register</v-btn>

  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  name: 'NuxtLogin',
  components: {
    UserAuthForm
  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('local', {
        data: loginInfo
      }).then((response => {
        if (response.ok) {
          this.$router.replace('/');
        }
      }))
    }
  }
}

</script>
