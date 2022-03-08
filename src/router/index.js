import Vue from 'vue'
import Router from 'vue-router'

//import { initCurrentUserStateMiddleware, checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  routes
})


export default router