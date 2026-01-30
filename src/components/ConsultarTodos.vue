<template>
  <div class="consultar-todos">
    <h1>Listado de Estudiantes</h1>
    <button @click="consultarTodos">Cargar Estudiantes</button>
    
    <div v-if="estudiantes.length === 0" class="mensaje-vacio">
      No hay estudiantes cargados. Haz clic en "Cargar Estudiantes"
    </div>
    
    <div v-else class="lista-estudiantes">
      <div v-for="estudiante in estudiantes" :key="estudiante.id" class="estudiante-card">
        <h3>{{ estudiante.nombre }} {{ estudiante.apellido }}</h3>
        <div class="detalles">
          <p><strong>ID:</strong> {{ estudiante.id }}</p>
          <p><strong>Fecha de Nacimiento:</strong> {{ formatearFecha(estudiante.fechaNacimiento) }}</p>
          <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
          <p><strong>Género:</strong> {{ estudiante.genero }}</p>
          
          <div v-if="estudiante.hijos && estudiante.hijos.length > 0" class="hijos">
            <h4>Hijos:</h4>
            <ul>
              <li v-for="hijo in estudiante.hijos" :key="hijo.id">
                {{ hijo.nombre }} - {{ hijo.edad }} años
              </li>
            </ul>
          </div>
          <p v-else class="sin-hijos">Sin hijos</p>
        </div>
      </div>
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
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #42b883;
  margin-bottom: 20px;
  font-size: 2rem;
}

button {
  margin: 10px 0 20px 0;
  padding: 10px 20px;
  background-color: #35495e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2c3e50;
}

.mensaje-vacio {
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  text-align: center;
}

.lista-estudiantes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.estudiante-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.estudiante-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.estudiante-card h3 {
  color: #42b883;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.detalles p {
  margin: 5px 0;
  color: #333;
}

.detalles strong {
  color: #35495e;
}

.hijos {
  margin-top: 10px;
  padding: 10px;
  background-color: #eef9f3;
  border-radius: 4px;
}

.hijos h4 {
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