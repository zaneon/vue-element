module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-element/dist/'
    : '/'
}