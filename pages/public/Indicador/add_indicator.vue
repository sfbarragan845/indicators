<template>
    <main id="services">
        <header>
            <Menu />
        </header>
        <div class="lg:flex lg:items-center lg:justify-between mt-4 ml-5">
            <div class="min-w-0 flex-1">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Agregar
                    Indicadores</h2>
            </div>
            <div class="py-4">
                <b-navbar-brand class="text-indigo-500 hover:text-indigo-600 inline-flex align-center gap-x-4"
                    href="indicador">
                    <ReturnIcon />
                    <h1 class="text-lg font-bold">Regresar</h1>
                </b-navbar-brand>
            </div>
        </div>

        <div class="formulario">

            <form @submit.prevent="agregarIndicador">
                <div class="form-group">
                    <label for="codigo" class="form-label">Codigo</label>
                    <input v-model="nuevoIndicador.codigo" type="text" id="codigo" class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="nuevoIndicador.nombre" type="text" id="nombre" class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="formula" class="form-label">Formula</label>
                    <input v-model="nuevoIndicador.formula" type="text" id="formula" class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="descripcion" class="form-label">Descripcion</label>
                    <input v-model="nuevoIndicador.descripcion" type="text" id="codigo"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="fechaInicioMedicion" class="form-label">Fecha de Inicio Medicion</label>
                    <input v-model="nuevoIndicador.fechaInicioMedicion" type="date" id="fechaInicioMedicion"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="reportaA" class="form-label">Reporta </label>
                    <input v-model="nuevoIndicador.reportaA" type="text" id="codigo" class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="lineaBase" class="form-label">Linea Base </label>
                    <input v-model="nuevoIndicador.lineaBase" type="number" id="lineaBase"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="comportamiento" class="form-label">Comportamiento </label>
                    <input v-model="nuevoIndicador.comportamiento" type="text" id="comportamiento"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="unidadMedida" class="form-label">Unidad de Medida </label>
                    <input v-model="nuevoIndicador.unidadMedida" type="text" id="unidadMedida"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="sentidoMedicion" class="form-label">Sentido de Medicion </label>
                    <input v-model="nuevoIndicador.sentidoMedicion" type="text" id="sentidoMedicion"
                        class="form-input mt-1 block w-full">
                </div>
                <div class="form-group">
                    <label for="denominador" class="form-label">Denominador </label>
                    <input v-model="nuevoIndicador.denominador" type="number" id="denominador"
                        class="form-input mt-1 block w-full">
                </div>
                <!-- Agrega aquí más campos si los necesitas -->
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

        </div>
    </main>
</template>

<script>
import icons from '~/icons';
import Swal from 'sweetalert2';
export default {
    components: {
        ReturnIcon: icons.return
    },
    data() {
        return {
            nuevoIndicador: {
                codigo: '',
                nombre: '',
                formula: '',
                descripcion: '',
                fechaInicioMedicion: '',
                reportaA: '',
                lineaBase: '',
                comportamiento: '',
                unidadMedida: '',
                sentidoMedicion: '',
                denominador: ''
            }
        };
    },
    methods: {
        agregarIndicador() {
            // Preparar los datos del nuevo indicador
            const nuevoIndicadorData = {
                codigo: this.nuevoIndicador.codigo,
                nombre: this.nuevoIndicador.nombre,
                formula: this.nuevoIndicador.formula,
                descripcion: this.nuevoIndicador.descripcion,
                fechaInicioMedicion: this.nuevoIndicador.fechaInicioMedicion,
                reportaA: this.nuevoIndicador.reportaA,
                lineaBase: this.nuevoIndicador.lineaBase,
                comportamiento: this.nuevoIndicador.comportamiento,
                unidadMedida: this.nuevoIndicador.unidadMedida,
                sentidoMedicion: this.nuevoIndicador.sentidoMedicion,
                denominador: this.nuevoIndicador.denominador
            };

            // Realizar una solicitud POST al servidor
            fetch('https://localhost:7100/api/Indicadors', {
                method: 'POST',
                headers: {
                    "client-platform": "browser",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoIndicadorData)
            })
                .then(response => response.json())
                .then(data => {
                    // Mostrar la alerta de SweetAlert
                    Swal.fire({
                        icon: 'success',
                        title: 'Indicador creado',
                        timer: 3000, // Tiempo en milisegundos
                        showConfirmButton: false
                    });

                    // Agregar un retraso de 3 segundos antes de redirigir
                    setTimeout(() => {
                        console.log('Indicador Creado:', data)
                        this.$router.push('indicador');
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error al agregar indicador:', error);
                    // Puedes mostrar un mensaje de error o realizar acciones de manejo de errores
                });
        }
    }
};
</script>
<style>
.form-group {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
}

.form-input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.btn {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
}

.formulario {
    display: flex;
    justify-content: center;
}

.formulario>form {
    width: 30%;
    margin-top: 5%;
}

/* Agrega aquí más estilos CSS si los necesitas */
</style>

