// 是否允许通过链接访问

export const ifAllowed = (self) => {
  if ((self.$store.state.pwdUuid != location.hash.substr(1)) || self.$store.state.pwdUuid === '') {
    self.$router.push({path: '/'})
  } else {
    self.$store.state.pwdUuid = ''
  }
}

// 生成一次性链接的 HASH 值

export const setHash = (self, p) => {
  // 生成 UUID => Math.random().toString(36).substr(2);截掉前两位的36位随机数
  let hash = Math.random().toString(36).substr(2)
  // 把生成的随机数作为 HASH 拼接在链接之后
  self.$store.state.pwdUuid = hash
  // 跳转
  self.$router.push({path: p + '#' + hash})
}
