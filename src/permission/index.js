import store from '../store'
import { getToken } from "../utils/auth"
import router from '../router'

// 根据用户角色来判定用户是否拥有权限
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // 用户是admin，直接访问
  if (!permissionRoles) return true // 所访问路由没有权限限制
  return roles.some(role => permissionRoles.indexOf(role) >= 0) // 用户角色属于路由角色之一
}

const loginList = ['/login','/register','/reset','/pwd']
// 路由白名单 => 不需要登陆就能访问的路由
const whiteList = ['/', '/authredirect','/cpl','/class','/detail','/ad',...loginList] // 不需要登陆的路由

router.beforeEach((to, from, next) => {
  if (getToken()) { // 如果获取到了token
    /* has token*/
    if (loginList.indexOf(to.path) === -1) { // 如果当前页面是登陆页，跳转到首页
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) { // 如果用户没有拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || '验证失败，请重新登陆')
            next({ path: '/' })
          })
        })
      } else { // 判断用户角色(权限)是否发生改变
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})
