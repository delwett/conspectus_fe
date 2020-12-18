const isNodeEnvProd = process.env.NODE_ENV === 'production'

module.exports = {
  displayName: !isNodeEnvProd
}
