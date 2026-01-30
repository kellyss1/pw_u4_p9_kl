import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTodos from '../components/ConsultarTodos.vue'
import ConsultarPorIdView from '../views/ConsultarPorIdView.vue'
import GuardarEstudianteView from '../views/GuardarEstudianteView.vue'
import ActualizarEstudianteView from '../views/ActualizarEstudianteView.vue'
import ActualizarNombreView from '../views/ActualizarNombreView.vue'
import BorrarEstudiante from '@/components/BorrarEstudiante.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/consultar-todos',
      name: 'consultar-todos',
      component: ConsultarTodos,
    },
    {
      path: '/consultar-por-id',
      name: 'consultar-por-id',
      component: ConsultarPorIdView,
    },
    {
      path: '/guardar-estudiante',
      name: 'guardar-estudiante',
      component: GuardarEstudianteView,
    },
    {
      path: '/actualizar-estudiante',
      name: 'actualizar-estudiante',
      component: ActualizarEstudianteView,
    },
    {
      path: '/actualizar-nombre',
      name: 'actualizar-nombre',
      component: ActualizarNombreView,
    },
    {
      path: '/borrar-estudiante',
      name: 'borrar-estudiante',
      component: BorrarEstudiante,
    }
  ],
})

export default router
