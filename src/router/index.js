import Vue from 'vue'
import VueRouter from 'vue-router'
import EncuestaView from '../views/EncuestaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: EncuestaView
  },
  {
    path: '/inicio',
    name: 'Inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/about',
    name: 'Planificador de Atracciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PlanificadorView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
