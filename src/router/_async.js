module.exports = (file,name) => {
  return r => require.ensure([], () => r(require(file)), name)
}
