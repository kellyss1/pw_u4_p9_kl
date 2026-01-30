<template>
  <div>
    <h1>Consultar Todos</h1>
    <button @click="consultarTodos">Cargar Estudiantes</button>
    <ul>
      <li v-for="estudiante in estudiantes" :key="estudiante.id">
        {{ estudiante.nombre }} - {{ estudiante.edad }} años
      </li>
    </ul>
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
    }
  }
};
</script>

<style>
button {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ddd;
}
</style>