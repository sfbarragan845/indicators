<template>
  <div>
    <Menu/>
    <div class="one">
      <h1>Editar  Cumplimiento</h1>
    </div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      v-bind:variant=variant_response
      @dismiss-count-down="countDownChanged">
      {{ message }}
    </b-alert>
    <ServiceForm buttonText="Guardar" :submitForm="editCumplimiento" hasName="true" v-bind:id_service="id_service"/>
  </div>
</template>

<script>
import ServiceForm from '../../../components/ComplianceForm.vue'
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
      id_service: this.$route.params.id,

    }
  },
  methods:{
    async  editCumplimiento(cumplimientoInfo){
      await this.$axios.put(`/Cumplimientoes/${this.$route.params.id}`, cumplimientoInfo).then((response) => {
          if (response.status === 201 || response.status === 200) {
            this.message = 'Cumplimiento actualizado con exito';
            this.variant_response= 'success';
            this.showAlert();
            setTimeout(() => {
              this.$router.replace('/public/Cumplimiento/');
            }, "2000");
          } else {
            this.variant_response= 'danger';
            this.message =
              'Error al actualizado el cumplimiento';
              this.showAlert();
          }
        }) .catch((error) => {
          if (error.response && error.response.status === 400) {
            this.variant_response = 'danger';
            this.message = 'Error al actualizado el cumplimiento';
            this.showAlert();
          }
        });

      console.log(cumplimientoInfo)
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
