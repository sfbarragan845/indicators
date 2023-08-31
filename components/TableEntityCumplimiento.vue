<template>
    <div class="mx-auto">
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        v-bind:variant=variant_response
        @dismiss-count-down="countDownChanged">
        {{ message }}
      </b-alert>
        <div class="-mx-4 sm:-mx-8 px-4 py-2 sm:px-8 flex flex-wrap flex-grow justify-between">
            <div class="grid place-items-center relative">
                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon />
                </span>
                <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-searcg" type="text" placeholder="Search">
            </div>
            <div class="mx-auto" style="width: 10px;">
            </div>
            <div class="flex items-center py-2">
                <button @click="createNewItem"
                    class="inline-flex align-items-center gap-x-2 px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    <AddIcon /> <span>Nuevo</span>
                </button>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-xl overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr
                            class="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                            <th class="px-6 py-3 font-medium">ID</th>
                            <th class="px-6 py-3 font-medium">Cumplimiento</th>
                            <th class="px-6 py-3 font-medium">Observación</th>
                            <th class="px-6 py-3 font-medium">Meta ID</th>
                            <th class="px-6 py-3 font-medium">Actividad ID</th>
                            <th class="px-6 py-3 text-center font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="{ 'bg-gray-100': index % 2 === 1 }" v-for="(item, index) in items" :key="item.id">
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.id }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.cumplimientoMeta }}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.observacion}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.metaId}}</td>
                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200 text-sm">{{ item.actividadId}}</td>

                            <td
                                class="px-6 inline-flex w-full justify-center gap-x-4 py-2 whitespace-no-wrap border-b border-gray-200 text-sm text-center">
                                <NuxtLink :to="`/public/Cumplimiento/${item.id}`"
                                    class="inline-block px-4 py-2 text-sm leading-5 font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600">
                                    <EditIcon />
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import icons from '~/icons';

export default {
    components: {
        SearchIcon: icons.search,
        AddIcon: icons.add,
        EditIcon: icons.edit,
        DeleteIcon: icons.delete,
        ReturnIcon: icons.return
    },
    props: {
        items: Array
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
        // async deleteItem(itemId) {
        //   // Aquí se debería manejar la lógica de eliminación
        //   console.log(`Eliminar entidad con ID: ${itemId}`)
        //   await this.$axios.delete(`/Cumplimiento/${itemId}`).then((response) => {
        //     if (response.status === 204 || response.status === 200) {
        //       this.message = 'Servicio eliminado con exito';
        //       this.variant_response= 'success';
        //       this.showAlert();
        //       setTimeout(() => {
        //         location.reload()
        //       }, "2000");
        //     } else {
        //       this.variant_response= 'danger';
        //       this.message =
        //         'Error al eliminar el servicio';
        //         this.showAlert();
        //     }
        //   }) .catch((error) => {
        //     if (error.response && error.response.status === 400) {
        //       this.variant_response = 'danger';
        //       this.message = 'Error al eliminar el servicio';
        //       this.showAlert();
        //     }
        //   });
        // },
        createNewItem() {
            // Aquí se debería manejar la lógica de creación de nueva entidad
            console.log('Crear nueva entidad')
            this.$router.push({ path: '/public/Cumplimiento/cumplimiento' })
        },
        countDownChanged(dismissCountDown) {
          this.dismissCountDown = dismissCountDown
        },
        showAlert() {
          this.dismissCountDown = this.dismissSecs
        }
    },
    name: 'NuxtTableEntity',
}
</script>
