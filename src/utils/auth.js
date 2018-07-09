// 引入js-cookie模块
import Cookies from 'js-cookie'

// token在cookie中的属性名
const TokenKey = 'Admin-Token'

// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 保存token到cookie
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 移除cookie中的token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
