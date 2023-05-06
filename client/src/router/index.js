import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import RegistrationPage from '../views/RegistrationPage.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutPage from '../views/AboutPage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'
import CreateCategory from '../views/CreateCategory.vue'
import RecipePage from '../views/RecipePage.vue'
import CreatePostPage from '../views/CreatePostPage.vue'
import UsersPage from '../views/UsersPage.vue'
import CategoryStyling from '../views/CategoryStyling.vue'
import SearchPostPage from '../views/SearchPostPage.vue'

import middlewarePipeline from './middlewarePipeline'
import checkAuth from './middleware/checkAuth'
import authMiddleware from './middleware/authMiddleware'
import isAdminMiddleware from './middleware/isAdminMiddleware'
import isCookerMiddleware from './middleware/isCookerMiddleware'
import isActivatedMiddleware from './middleware/isActivatedMiddleware'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuPage,
    meta: {
      title: 'Light food',
      middleware: [
        checkAuth
      ]
    },
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPostPage,
    meta: {
      title: 'Light food',
      middleware: [
        checkAuth
      ]
    },
  },
  {
    path: '/category-styling',
    name: 'categoryStyling',
    component: CategoryStyling,
    meta: {
      title: 'Стилизация категорий',
      middleware: [
        checkAuth,
        authMiddleware,
        isAdminMiddleware,
        isActivatedMiddleware,
      ]
    },
  },
  {
    path: '/users',
    name: 'users',
    component: UsersPage,
    meta: { 
      title: 'Пользователи',
      middleware: [
        checkAuth,
        authMiddleware,
        isAdminMiddleware,
        isActivatedMiddleware,
      ]
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { 
      title: 'О нас',
      middleware: [
        checkAuth,
      ]
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage,
    meta: { 
      title: 'Регистрация',
      middleware: [
        checkAuth,
      ]
    },
  },
  {
    path: '/createRecipe',
    name: 'createPost',
    component: CreatePostPage,
    meta: {
      title: 'Создать пост',
      middleware: [
        checkAuth,
        authMiddleware,
        isActivatedMiddleware,
        isCookerMiddleware,
      ]
    },
  },
  {
    path: '/createCategory',
    name: 'createCategory',
    component: CreateCategory,
    meta: { 
      title: 'Настройки категорий',
      middleware: [
        checkAuth,
        authMiddleware,
        isAdminMiddleware,
        isActivatedMiddleware,
      ]
    },
  },
  {
    path: '/:category',
    name: 'menu',
    component: MenuPage,
    meta: { 
      title: 'Light food',
      middleware: [
        checkAuth,
      ]
    },
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesPage,
    meta: { 
      title: 'Избранное',
      middleware: [
        checkAuth,
        authMiddleware,
        isActivatedMiddleware
      ]
    },
  },
  {
    path: '/recipe/:link',
    name: 'recipe',
    component: RecipePage,
    meta: { 
      title: 'Light food',
      middleware: [
        checkAuth,
      ]
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`
  next()
})

router.beforeEach((to, from, next) => {

  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware

  const context = {
      to,
      from,
      next,
      store
  }

  middleware[0]({
      ...context,
      nextMiddleware: middlewarePipeline(context, middleware, 1)
  })

})

export default router