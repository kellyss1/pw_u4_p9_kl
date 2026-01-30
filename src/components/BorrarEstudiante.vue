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
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
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

input {
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

.mensaje {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #42b883;
  border-radius: 4px;
  background-color: #eef9f3;
  color: #42b883;
  text-align: center;
}
</style>
