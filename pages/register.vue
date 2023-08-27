<template>
  <div>
    <div class="one">
      <h1>Registro</h1>
    </div>
    <UserAuthForm buttonText="Registrar" :submitForm="registerUser" hasName="true" />
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      v-bind:variant=variant_response
      @dismiss-count-down="countDownChanged">
      {{ message }}
    </b-alert>
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  name: 'NuxtLogin',
  components: {
    UserAuthForm
  },
  data() {
    return {
      message: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      variant_response:'success',
    }
  },
  methods: {
    async registerUser(registrationInfo) {
      await this.$axios.post('/Users', registrationInfo).then((response) => {
          if (response.status === 201 || response.status === 200) {
            this.message = 'Servicio registrado con exito';
            this.variant_response= 'success';
            this.showAlert();
          } else {
            this.variant_response= 'danger';
            this.message =
              'Error al registrar el servicio';
              this.showAlert();
          }
        }) .catch((error) => {
          if (error.response && error.response.status === 400) {
            this.variant_response = 'danger';
            this.message = 'Error al registrar el servicioa';
            this.showAlert();
          }
        });

      this.$auth.loginWith('local', {
        data: registrationInfo
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}

</script>


<style>
h1 {
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 3%;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

/* === HEADING STYLE #1 === */
.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}
.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: "";
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;
}
.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: "";
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}
</style>
