import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Buisness from '../views/Ya-buisness.vue'
import PlusKids from '../views/Ya-plus.vue';
import Search from '../views/Ya-search.vue'
import Video from '../views/Ya-video.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    children: [
      {
        path: 'ya-pluskids', 
        name: 'YaPlusKids', 
        component: PlusKids, 
        props: route => ({ currentPage: parseInt(route.query.page) || 1 })
      },
      {
        path: 'ya-search',
        name: 'Search',
        component: Search,
        props: route => ({ currentPage: parseInt(route.query.page) || 1 })
      },
      {
        path: 'ya-video',
        name: 'Video',
        component: Video,
        props: route => ({ currentPage: parseInt(route.query.page) || 1 })
      },
      {
        path: 'ya-buisness',
        name: 'Buisness',
        component: Buisness,
        props: route => ({ currentPage: parseInt(route.query.page) || 1 })
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router