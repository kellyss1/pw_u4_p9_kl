<template>
  <div class="borrar-estudiante">
    <h1>Borrar Estudiante</h1>
    <form @submit.prevent="borrarEstudiante">
      <div class="form-group">
        <label for="id">ID del Estudiante:</label>
        <input type="number" id="id" v-model="id" required />
      </div>

      <button type="submit">Borrar</button>
    </form>

    <div v-if="mensaje" class="mensaje">
      {{ mensaje }}
    </div>
  </div>
</template>

<script>
import { BorrarFachada } from "../clients/MatriculaClient";

export default {
  data() {
    return {
      id: null,
      mensaje: ""
    };
  },
  methods: {
    async borrarEstudiante() {
      try {
        await BorrarFachada(this.id);
        this.mensaje = `Estudiante con ID ${this.id} eliminado exitosamente.`;
        this.id = null;
      } catch (error) {
        this.mensaje = "Error al borrar el estudiante.";
      }
    }
  }
};
</script>

<style scoped>
.borrar-estudiante {
  padding: 1.5rem;
  max-width: 700px;
  margin: 2rem auto 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; /* Fondo más claro */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para profundidad */
}

h1 {
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

input {
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

.mensaje {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #42b883;
  border-radius: 8px;
  background-color: #eef9f3;
  color: #42b883;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
