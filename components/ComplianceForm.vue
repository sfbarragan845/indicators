<template>
  <v-form v-model="valid">
    <v-card  fill-height fluid class="mx-auto my-12 p-5" max-width="500">
      <v-row align="center" justify="center">
        <v-col  cols="12" md="12">
          <v-text-field v-model="cumplimientoInfo.cumplimientoMeta" type="number"
                  label="% de Cumplimiento"
                  :rules="[required('cumplimientoMeta')]"
                  v-if="hasName" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col  cols="12" md="12">
          <v-text-field v-model="cumplimientoInfo.observacion"
                  label="Observación"
                  :rules="[required('observacion')]"
                  v-if="hasName" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col  cols="12" md="12">
          <v-text-field v-model="cumplimientoInfo.metaId" type="number"
                  label="Meta ID"
                  :rules="[required('metaId')]"
                  v-if="hasName" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col  cols="12" md="12">
          <v-text-field v-model="cumplimientoInfo.actividadId" type="number"
                  label="Actividad ID"
                  :rules="[required('actividadId')]"
                  v-if="hasName" />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col  cols="12" md="6" align="center" justify="center">
          <v-btn  class="mt-4" to="/public/services/"><NuxtLink to="/public/services/">Cancelar</NuxtLink></v-btn>
        </v-col>
        <v-col  cols="12" md="6" align="center" justify="center">
          <v-btn @click="submitForm(cumplimientoInfo)" :disabled="!valid"  v-if="hasName" class="text-none mb-4 mt-4 red--text"
          color="#b80000"
          size="medium"
          variant="outlined" ><span class = "text-white">{{ buttonText }}</span></v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-form>
</template>
<script>
  import validations from "@/utils/validations";

  let data_service;
  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        cumplimientoInfo: {
          cumplimientoMeta: '',
          observacion: '',
          metaId: '',
          actividadId: '',
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText", "hasName", "id_service"],

    methods:{
      async  load_data(id_service){
        await this.$axios.get(`/Cumplimientoes/${id_service}`).then(response => {
          this.data_service = response.data;
        })
      }
    },

    async beforeMount() {
      console.log(this.id_service)

      if(this.id_service != '0'){
        await this.load_data(this.id_service)
        this.cumplimientoInfo.cumplimientoMeta = this.data_service.cumplimientoMeta;
        this.cumplimientoInfo.observacion = this.data_service.observacion;
        this.cumplimientoInfo.metaId = this.data_service.metaId;
        this.cumplimientoInfo.actividadId = this.data_service.actividadId;
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
