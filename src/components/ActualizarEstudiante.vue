<template>
  <div class="container">
    <h2>Actualizar Estudiante</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>

    <div class="id-input-group">
      <label for="id">ID del Estudiante:</label>
      <input
        id="id"
        v-model.number="idEstudiante"
        type="number"
        placeholder="Ingrese el ID"
        min="1"
      />
    </div>

    <form @submit.prevent="actualizarEstudiante" class="formulario">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Ingrese el nombre"
          required
        />
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input
          id="apellido"
          v-model="formulario.apellido"
          type="text"
          placeholder="Ingrese el apellido"
          required
        />
      </div>

      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          v-model="formulario.fechaNacimiento"
          type="date"
          required
        />
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input
          id="provincia"
          v-model="formulario.provincia"
          type="text"
          placeholder="Ingrese la provincia"
          required
        />
      </div>

      <div class="form-group">
        <label for="genero">Género:</label>
        <select id="genero" v-model="formulario.genero" required>
          <option value="">Seleccione un género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <button type="submit" class="btn">Actualizar</button>
    </form>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="respuesta" class="resultado">
      <h3>{{ respuesta }}</h3>
    </div>
  </div>
</template>

<script>
import { ActualizarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      idEstudiante: 1,
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
    async actualizarEstudiante() {
      try {
        this.error = null;
        this.respuesta = null;

        if (!this.idEstudiante || this.idEstudiante < 1) {
          this.error = "Por favor, ingrese un ID válido";
          return;
        }

        const body = {
          nombre: this.formulario.nombre,
          apellido: this.formulario.apellido,
          fechaNacimiento: this.formulario.fechaNacimiento + "T00:00:00",
          provincia: this.formulario.provincia,
          genero: this.formulario.genero,
        };

        await ActualizarFachada(this.idEstudiante, body);
        this.respuesta = "¡Los datos del estudiante han sido actualizados exitosamente!";
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
.container {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h2 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 1.5rem;
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
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #35495e;
}

.error {
  color: #c33;
  background-color: #fee;
  padding: 0.5rem;
  border-left: 4px solid #c33;
  margin-top: 1rem;
}

.resultado {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #35495e;
  font-weight: bold;
  text-align: center;
}

.resultado h3 {
  margin-top: 0;
  color: #35495e;
}
</style>
