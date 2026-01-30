<template>
  <div class="consultar-por-id">
    <h1>Consultar Estudiante por ID</h1>
    <div class="form-group">
      <label for="id">ID del Estudiante:</label>
      <input type="number" id="id" v-model="id" placeholder="Ingrese el ID" />
    </div>
    <button @click="consultarPorId">Buscar</button>

    <div v-if="estudiante" class="estudiante-detalle">
      <h2>{{ estudiante.nombre }} {{ estudiante.apellido }}</h2>
      <p><strong>ID:</strong> {{ estudiante.id }}</p>
      <p><strong>Fecha de Nacimiento:</strong> {{ formatearFecha(estudiante.fechaNacimiento) }}</p>
      <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
      <p><strong>Género:</strong> {{ estudiante.genero }}</p>

      <div v-if="estudiante.hijos && estudiante.hijos.length > 0" class="hijos">
        <h3>Hijos:</h3>
        <ul>
          <li v-for="hijo in estudiante.hijos" :key="hijo.id">
            {{ hijo.nombre }} - {{ hijo.edad }} años
          </li>
        </ul>
      </div>
      <p v-else class="sin-hijos">Sin hijos</p>
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ConsultarPorIdFachada } from "../clients/MatriculaClient";

export default {
  data() {
    return {
      id: null,
      estudiante: null,
      error: null
    };
  },
  methods: {
    async consultarPorId() {
      try {
        this.error = null;
        this.estudiante = await ConsultarPorIdFachada(this.id);
      } catch (e) {
        this.error = "No se encontró un estudiante con el ID proporcionado.";
        this.estudiante = null;
      }
    },
    formatearFecha(fecha) {
      if (!fecha) return "N/A";
      const date = new Date(fecha);
      return date.toLocaleDateString("es-ES");
    }
  }
};
</script>

<style scoped>
.consultar-por-id {
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

.error {
  color: #c33;
  background-color: #fee;
  padding: 0.5rem;
  border-left: 4px solid #c33;
  margin-top: 1rem;
}

.estudiante-detalle {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.estudiante-detalle h2 {
  margin-top: 0;
  color: #35495e;
}

.estudiante-detalle p {
  margin: 5px 0;
  color: #333;
}

.estudiante-detalle strong {
  color: #35495e;
}

.hijos {
  margin-top: 10px;
  padding: 10px;
  background-color: #eef9f3;
  border-radius: 4px;
}

.hijos h3 {
  margin-bottom: 10px;
  color: #35495e;
  font-size: 1rem;
}

.hijos ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.hijos li {
  margin: 5px 0;
  padding: 5px 10px;
  background-color: white;
  border-left: 3px solid #42b883;
  border-radius: 3px;
}

.sin-hijos {
  color: #999;
  font-style: italic;
  margin-top: 10px;
}
</style>
