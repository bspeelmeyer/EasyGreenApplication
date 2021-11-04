import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pages/login',
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      title: 'User Dashboard'
    }
  },
  {
    path: '/my-plants',
    name: 'my-plants',
    component: () => import('@/views/userPlants/IndividualPlant.vue'),
  },
  {
    path: '/sub-detail-plant/:id',
    name: 'sub-detail-plant',
    component: () => import('@/views/userPlants/SubDetailPlant.vue'),
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
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/dashboard/AboutUs.vue'),
  },
  {
    path: '/admin-about-us',
    name: 'admin-about-us',
    component: () => import('@/views/dashboard/AboutUs.vue'),
    meta: {
      title: 'About Us',
      layout: "admin-layout"
    }
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
    meta: {
      title: 'Admin Dashboard',
      layout: 'admin-layout'
    }
  },
  {
    path: '/organization-board',
    name: 'organization-board',
    component: () => import('@/views/organisationDashboard/Organizationboard.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/edit-user',
    name: 'edit-user',
    component: () => import('@/views/organisationDashboard/Edituser.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/edit-plant',
    name: 'edit-plant',
    component: () => import('@/views/organisationDashboard/EditPlant.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: () => import('@/views/adminDashboard/CreateUser.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/create-plant',
    name: 'create-plant',
    component: () => import('@/views/adminDashboard/CreatePlant.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/create-organization',
    name: 'create-organization',
    component: () => import('@/views/adminDashboard/CreateOrg.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
