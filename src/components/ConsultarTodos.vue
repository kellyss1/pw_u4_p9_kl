<template>
  <div class="consultar-todos">
    <h1>Listado de Estudiantes</h1>
    <button @click="consultarTodos">Cargar Estudiantes</button>
    
    <div v-if="estudiantes.length === 0" class="mensaje-vacio">
      No hay estudiantes cargados. Haz clic en "Cargar Estudiantes"
    </div>
    
    <div v-else class="tabla-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Provincia</th>
            <th>Género</th>
            <th>Hijos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ formatearFecha(estudiante.fechaNacimiento) }}</td>
            <td>{{ estudiante.provincia }}</td>
            <td>{{ estudiante.genero }}</td>
            <td>
              <div v-if="estudiante.hijos && estudiante.hijos.length > 0">
                <div v-for="hijo in estudiante.hijos" :key="hijo.id" class="hijo-item">
                  {{ hijo.nombre }} ({{ hijo.edad }} años)
                </div>
              </div>
              <span v-else class="sin-hijos">Sin hijos</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ConsultarTodosFachada } from "../clients/MatriculaClient";

export default {
  data() {
    return {
      estudiantes: []
    };
  },
  methods: {
    async consultarTodos() {
      this.estudiantes = await ConsultarTodosFachada();
    },
    formatearFecha(fecha) {
      if (!fecha) return 'N/A';
      const date = new Date(fecha);
      return date.toLocaleDateString('es-ES');
    }
  }
};
</script>

<style scoped>
.consultar-todos {
  padding: 1.5rem;
  max-width: 700px;
  margin: 2rem auto 0 auto;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5; /* Fondo más claro para el contenedor */
  border-radius: 8px; /* Bordes redondeados para el contenedor */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
}

h1 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 2rem; /* Tamaño de fuente más grande */
  text-align: center; /* Centrar el título */
}

button {
  margin: 10px 0 20px 0;
  padding: 0.75rem 1.5rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #35495e;
  transform: scale(1.05);
}

.mensaje-vacio {
  padding: 15px;
  background-color: #fff3cd; /* Fondo amarillo claro */
  border: 1px solid #ffeeba; /* Borde amarillo */
  border-radius: 6px;
  color: #856404; /* Texto amarillo oscuro */
  text-align: center;
  font-weight: bold;
}

.tabla-container {
  margin-top: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: #42b883;
  color: white;
}

th {
  padding: 15px;
  text-align: left;
  font-weight: bold;
  font-size: 0.95rem;
}

tbody tr {
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

tbody tr:last-child {
  border-bottom: none;
}

td {
  padding: 12px 15px;
  color: #333;
  font-size: 0.9rem;
}

.hijo-item {
  padding: 4px 8px;
  margin: 2px 0;
  background-color: #eef9f3;
  border-left: 3px solid #42b883;
  border-radius: 3px;
  font-size: 0.85rem;
}

.sin-hijos {
  color: #999;
  font-style: italic;
}
</style>