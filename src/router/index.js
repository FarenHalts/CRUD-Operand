import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Crud',
    component: () => import('../views/Crud.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
