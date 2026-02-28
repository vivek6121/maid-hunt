const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SplashPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'role', component: () => import('pages/RoleSelectPage.vue') },

      { path: 'maid/setup', component: () => import('pages/maid/MaidProfileSetupPage.vue') },
      { path: 'maid/dashboard', component: () => import('pages/maid/MaidDashboardPage.vue') },

      { path: 'search', component: () => import('pages/employer/SearchMaidsPage.vue') },
      { path: 'maid/:id', component: () => import('pages/employer/MaidDetailsPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes