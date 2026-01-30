<template>
  <div>
    <button @click="consultarTodos">Consultar Todos</button>
    <button @click="consultarPorId">Consultar por ID</button>
    <button @click="guardar">Guardar</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="actualizarParcial">Actualizar Parcial</button>
    <button @click="borrar">Borrar</button>
  </div>
</template>

<script>
import {
  ConsultarTodosFachada,
  ConsultarPorIdFachada,
  GuardarFachada,
  ActualizarFachada,
  ActualizarParcialFachada,
  BorrarFachada
} from "../clients/MatriculaClient";

export default {
  methods: {
    async consultarTodos() {
      const data = await ConsultarTodosFachada();
      console.log("Todos los estudiantes:", data);
    },
    async consultarPorId() {
      const id = prompt("Ingrese el ID del estudiante:");
      if (id) {
        const data = await ConsultarPorIdFachada(id);
        console.log("Estudiante consultado:", data);
      }
    },
    async guardar() {
      const body = { nombre: "Nuevo Estudiante", edad: 20 };
      const data = await GuardarFachada(body);
      console.log("Estudiante guardado:", data);
    },
    async actualizar() {
      const id = prompt("Ingrese el ID del estudiante a actualizar:");
      if (id) {
        const body = { nombre: "Estudiante Actualizado", edad: 21 };
        const data = await ActualizarFachada(id, body);
        console.log("Estudiante actualizado:", data);
      }
    },
    async actualizarParcial() {
      const id = prompt("Ingrese el ID del estudiante a actualizar parcialmente:");
      if (id) {
        const body = { edad: 22 };
        const data = await ActualizarParcialFachada(id, body);
        console.log("Estudiante actualizado parcialmente:", data);
      }
    },
    async borrar() {
      const id = prompt("Ingrese el ID del estudiante a borrar:");
      if (id) {
        await BorrarFachada(id);
        console.log("Estudiante borrado con ID:", id);
      }
    }
  }
};
</script>

<style>
button {
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
</style>