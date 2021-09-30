import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pages/login',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: () => import('@/views/adminDashboard/AdminDashboard.vue'),
  },
  {
    path: '/organization-board',
    name: 'organization-board',
    component: () => import('@/views/organisationDashboard/Organizationboard.vue'),
  },
  {
    path: '/edit-user',
    name: 'edit-user',
    component: () => import('@/views/organisationDashboard/Edituser.vue'),
  },
  {
    path: '/edit-plant',
    name: 'edit-plant',
    component: () => import('@/views/organisationDashboard/EditPlant.vue'),
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: () => import('@/views/adminDashboard/CreateUser.vue'),
  },
  {
    path: '/create-plant',
    name: 'create-plant',
    component: () => import('@/views/adminDashboard/CreatePlant.vue'),
  },
  {
    path: '/create-organization',
    name: 'create-organization',
    component: () => import('@/views/adminDashboard/CreateOrg.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
