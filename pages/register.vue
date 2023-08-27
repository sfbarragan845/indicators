<template>
  <div>
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" />
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
    async registerUser(registrationInfo) {
      await this.$axios.post('/Users', registrationInfo)

      this.$auth.loginWith('local', {
        data: registrationInfo
      })
      // Redirigir a la página de destino
      this.$router.replace('');
    }
  }
}

</script>
