<template>
  <div>
    <Menu/>
    <h4>Agregar Servicio</h4>
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
  methods:{
    async  registerService(serviceInfo){
      await this.$axios.post('/Servicios', serviceInfo)

      console.log(serviceInfo)
    }
  }
}

</script>
