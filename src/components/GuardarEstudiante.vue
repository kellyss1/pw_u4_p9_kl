<template>
  <div class="container">
    <h2>Guardar Estudiante</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>

    <form @submit.prevent="guardarEstudiante">
      <div>
        <label for="nombre">Nombre:</label>
        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Ingrese el nombre"
          required
        />
      </div>

      <div>
        <label for="apellido">Apellido:</label>
        <input
          id="apellido"
          v-model="formulario.apellido"
          type="text"
          placeholder="Ingrese el apellido"
          required
        />
      </div>

      <div>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          v-model="formulario.fechaNacimiento"
          type="date"
          required
        />
      </div>

      <div>
        <label for="provincia">Provincia:</label>
        <input
          id="provincia"
          v-model="formulario.provincia"
          type="text"
          placeholder="Ingrese la provincia"
          required
        />
      </div>

      <div>
        <label for="genero">Género:</label>
        <select id="genero" v-model="formulario.genero" required>
          <option value="">Seleccione un género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <button type="submit">Guardar</button>
    </form>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="respuesta" class="mensaje">{{ respuesta }}</div>
  </div>
</template>

<script>
import { GuardarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      formulario: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        provincia: "",
        genero: "",
      },
      respuesta: null,
      error: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      try {
        this.error = null;
        this.respuesta = null;

        const body = {
          nombre: this.formulario.nombre,
          apellido: this.formulario.apellido,
          fechaNacimiento: this.formulario.fechaNacimiento + "T00:00:00",
          provincia: this.formulario.provincia,
          genero: this.formulario.genero,
        };

        await GuardarFachada(body);
        this.respuesta = "¡El estudiante ha sido registrado exitosamente!";
        this.formulario = {
          nombre: "",
          apellido: "",
          fechaNacimiento: "",
          provincia: "",
          genero: "",
        };
      } catch (error) {
        this.error = "Error: " + error.message;
        this.respuesta = null;
      }
    },
  },
};
</script>

<style scoped>
/* Ajuste de estilos basado en ConsultarPorId.vue */
.container {
  padding: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; /* Fondo más claro */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para profundidad */
}

h2 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 2rem; /* Título más grande */
  text-align: center; /* Centrar el título */
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #35495e;
}

input,
select {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 6px; /* Bordes más redondeados */
  font-size: 1rem;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #35495e;
  transform: scale(1.05); /* Efecto de zoom */
}

.error {
  color: #c33;
  background-color: #fee;
  padding: 1rem;
  border-left: 4px solid #c33;
  margin-top: 1.5rem;
  border-radius: 6px;
}

.mensaje {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #35495e;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
