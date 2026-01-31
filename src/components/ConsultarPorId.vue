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
  padding: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
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

.error {
  color: #c33;
  background-color: #fee;
  padding: 1rem;
  border-left: 4px solid #c33;
  margin-top: 1.5rem;
  border-radius: 6px;
}

.estudiante-detalle {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.estudiante-detalle h2 {
  margin-top: 0;
  color: #35495e;
  font-size: 1.5rem;
}

.estudiante-detalle p {
  margin: 5px 0;
  color: #333;
}

.hijos {
  margin-top: 10px;
  padding: 15px;
  background-color: #eef9f3;
  border-radius: 6px;
}

.hijos h3 {
  margin-bottom: 10px;
  color: #35495e;
  font-size: 1.1rem;
}

.hijos ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.hijos li {
  margin: 5px 0;
  padding: 8px 12px;
  background-color: white;
  border-left: 4px solid #42b883;
  border-radius: 4px;
}

.sin-hijos {
  color: #999;
  font-style: italic;
  margin-top: 10px;
}
</style>
