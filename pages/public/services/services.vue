<template>
  <div>
    <Menu/>
    <div class="one">
      <h1>Agregar  Servicio</h1>
    </div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      v-bind:variant=variant_response
      @dismiss-count-down="countDownChanged">
      {{ message }}
    </b-alert>
    <ServiceForm buttonText="Guardar" :submitForm="registerService" hasName="true"/>
  </div>
</template>

<script>
import ServiceForm from '../../../components/ServiceForm.vue'
export default {
  name: 'NuxtRegisterService',
  components:{
    ServiceForm
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
  methods:{
    async  registerService(serviceInfo){
      await this.$axios.post('/Servicios', serviceInfo).then((response) => {
          if (response.status === 201 || response.status === 200) {
            this.message = 'Servicio registrado con exito';
            this.variant_response= 'success';
            this.showAlert();
            setTimeout(() => {
              this.$router.replace('/public/services/');
            }, "2000");
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

      console.log(serviceInfo)
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
