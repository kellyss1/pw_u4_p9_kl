<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/consultar-todos">Consultar Todos</RouterLink>
        <RouterLink to="/consultar-por-id">Consultar Por ID</RouterLink>
        <RouterLink to="/guardar-estudiante">Guardar Estudiante</RouterLink>
        <RouterLink to="/actualizar-estudiante">Actualizar Estudiante</RouterLink>
        <RouterLink to="/actualizar-nombre">Actualizar Nombre</RouterLink>
        <RouterLink to="/borrar-estudiante">Borrar Estudiante</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

</template>

<script>

  
</script>

<style scoped>
header {
  font-family: 'Verdana', sans-serif; /* Fuente específica para el encabezado */
  font-size: 18px; /* Tamaño ligeramente mayor para el encabezado */
  line-height: 1.5;
  max-height: 100vh;
  background-color: #f9f9f9; /* Fondo más claro para el encabezado */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem; /* Reducir el espacio interno */
  margin: 0.25rem 0.5rem; /* Ajustar el margen para un diseño más compacto */
  border: 2px solid #42b883; /* Bordes más gruesos */
  border-radius: 8px; /* Bordes más redondeados */
  color: #42b883;
  text-decoration: none;
  font-weight: bold; /* Texto más destacado */
  transition: background-color 0.3s, color 0.3s, transform 0.2s; /* Animación más fluida */
}

nav a:hover {
  background-color: #42b883;
  color: white;
  transform: scale(1.05); /* Efecto de zoom al pasar el cursor */
}

nav a.router-link-exact-active {
  background-color: #35495e;
  color: white;
  border-color: #35495e; /* Bordes del mismo color que el fondo activo */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center; /* Alineación vertical centrada */
    justify-content: space-between; /* Espaciado entre logo y navegación */
    padding: 1rem 2rem; /* Más espacio interno */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0; /* Ajuste de margen */
    font-size: 1.125rem; /* Tamaño de fuente ligeramente mayor */
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

/* Estilo general para las letras */
body {
  font-family: 'Arial', sans-serif; /* Fuente general para todo el sitio */
  font-size: 16px; /* Tamaño base de fuente */
  color: #333; /* Color de texto principal */
  line-height: 1.6; /* Altura de línea para mejor legibilidad */
}

/* Ajuste del tamaño de las pestañas (enlaces de navegación) */
nav a {
  padding: 0.5rem 1rem; /* Reducir el espacio interno */
  font-size: 0.875rem; /* Reducir el tamaño de la fuente */
  margin: 0.25rem 0.5rem; /* Ajustar el margen para un diseño más compacto */
}
</style>
