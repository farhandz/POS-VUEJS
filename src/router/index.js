import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Menu.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    exact: true,
    path: '/about',
    name: 'About',
    meta: { requiresDatePicker: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: { requiresDatePicker: true },
    props: true,
    exact: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/:id',
    name: 'edit',
    meta: { requiresDatePicker: true },
    props: true,
    exact: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
