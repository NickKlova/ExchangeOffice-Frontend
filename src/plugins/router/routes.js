export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboards/Dashboards.vue'),
      },
      {
        path: 'transaction/create',
        component: () => import('@/pages/transactions/CreateTransaction.vue'),
      },
      {
        path: 'currencies/get',
        component: () => import('@/pages/currencies/Currencies.vue'),
      },
      {
        path: 'rate/create',
        component: () => import('@/pages/rates/CreateRate.vue'),
      },
      {
        path: 'rates/get',
        component: () => import('@/pages/rates/ViewRates.vue'),
        //meta: {
        //  requiresAuth: true,
        //  roles: ['Owner'],
        //},
      },
      {
        path: 'funds/get',
        component: () => import('@/pages/funds/ViewFunds.vue'),
      },
      {
        path: 'reservation/create',
        component: () => import('@/pages/reservations/CreateReservation.vue'),
      },
      {
        path: 'contacts/get',
        component: () => import('@/pages/contacts/Contacts.vue'),
      },
      {
        path: 'reservations/get',
        component: () => import('@/pages/reservations/ViewReservations.vue'),
      },
      {
        path: 'transactions/get',
        component: () => import('@/pages/transactions/ViewTransactions.vue'),
      },
      {
        path: 'users/get',
        component: () => import('@/pages/users/Users.vue')
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
