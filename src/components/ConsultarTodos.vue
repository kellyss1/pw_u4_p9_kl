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
  padding: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
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

.lista-estudiantes {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.estudiante-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px; /* Bordes más redondeados */
  padding: 20px; /* Más espacio interno */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.2s; /* Animación más fluida */
}

.estudiante-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px); /* Efecto de elevación al pasar el cursor */
}

.estudiante-card h3 {
  color: #42b883;
  margin-bottom: 10px;
  font-size: 1.5rem; /* Tamaño de fuente más grande */
}

.detalles p {
  margin: 5px 0;
  color: #333;
  font-size: 0.95rem; /* Ajuste de tamaño de fuente */
}

.detalles strong {
  color: #35495e;
}

.hijos {
  margin-top: 10px;
  padding: 15px; /* Más espacio interno */
  background-color: #eef9f3;
  border-radius: 6px; /* Bordes más redondeados */
}

.hijos h4 {
  margin-bottom: 10px;
  color: #35495e;
  font-size: 1.1rem; /* Tamaño de fuente ligeramente mayor */
}

.hijos li {
  margin: 5px 0;
  padding: 8px 12px; /* Más espacio interno */
  background-color: white;
  border-left: 4px solid #42b883; /* Borde más grueso */
  border-radius: 4px; /* Bordes más redondeados */
}

.sin-hijos {
  color: #999;
  font-style: italic;
  margin-top: 10px;
  text-align: center; /* Centrar el texto */
}
</style>