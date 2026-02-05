import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTodos from '../components/ConsultarTodos.vue'
import ConsultarPorIdView from '../views/ConsultarPorIdView.vue'
import GuardarEstudianteView from '../views/GuardarEstudianteView.vue'
import ActualizarEstudianteView from '../views/ActualizarEstudianteView.vue'
import ActualizarNombreView from '../views/ActualizarNombreView.vue'
import BorrarEstudiante from '@/components/BorrarEstudiante.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: false, esPublico: true  }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: { requiresAuth: false, esPublico: true  }
  },  
  {
    path: '/consultar-todos',
    name: 'consultar-todos',
    component: ConsultarTodos,
    meta: { requiresAuth: false, esPublico: true  }
  },
  {
    path: '/consultar-por-id',
    name: 'consultar-por-id',
    component: ConsultarPorIdView,
    meta: { requiresAuth: false, esPublico: true  }
  },
  {
    path: '/guardar-estudiante',
    name: 'guardar-estudiante',
    component: GuardarEstudianteView,
    meta: { requiresAuth: true, esPublico: false  }
  },
  {
    path: '/actualizar-estudiante',
    name: 'actualizar-estudiante',
    component: ActualizarEstudianteView,
    meta: { requiresAuth: true, esPublico: false  }
  },
  {
    path: '/actualizar-nombre',
    name: 'actualizar-nombre',
    component: ActualizarNombreView,
    meta: { requiresAuth: true, esPublico: false  }
  },
  {
    path: '/borrar-estudiante',
    name: 'borrar-estudiante',
    component: BorrarEstudiante,
    meta: { requiresAuth: true, esPublico: false  }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Configuracion del Guardian
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    // Le envio a una pagina de login
    console.log("Ruta protegida, requiere autenticacion");
    console.log("Redirigiendo a la pagina de login...");
  } else {
    //No requiere autenticacion
    console.log("Pase Libre, no requiere autenticacion");
    next();
  }
});

export default router
