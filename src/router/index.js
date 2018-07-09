const Index = r => require.ensure([], () => r(require('pages/index/Index')), 'Index')

const Class = r => require.ensure([], () => r(require('fullpage/class/Index')), 'Class')

const Pass = r => require.ensure([], () => r(require('pass/Index')), 'Pass')

const Login = r => require.ensure([], () => r(require('pass/login/Login')), 'Login')
const Register = r => require.ensure([], () => r(require('pass/register/Register')), 'Register')
const Reset = r => require.ensure([], () => r(require('pass/reset/Reset')), 'Reset')
const Pwd = r => require.ensure([], () => r(require('pass/pwd/Pwd')), 'Pwd')
const Cpl = r => require.ensure([], () => r(require('pass/ready/Ready')), 'Cpl')

const lost = r => require.ensure([], () => r(require('@/pages/404')), 'lost')

export const constantRouterMap = [
  {
    path: '/',
    component: Index,
    meta: {
      keepalive: true
    }
  },
  {
    path: '/class',
    component: Class
  },
  {
    path: '/pass',
    component: Pass,
    redirect: {
      path: '/login'
    },
    children: [
      {
        path: 'login',
        component: Login,
        alias: '/login'
      },
      {
        path: 'register',
        component: Register,
        alias: '/register'
      },
      {
        path: 'reset',
        component: Reset,
        alias: '/reset'
      },
      {
        path: 'pwd',
        component: Pwd,
        alias: '/pwd'
      },
      {
        path: 'cpl',
        component: Cpl,
        alias: '/cpl'
      }
    ]
  },
  {
    path: '/404',
    component: lost
  }
]

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  mode: 'history'
})

