module.exports = {
  pluginOptions: {
    quasar: {}
  },
  devServer: {
    disableHostCheck: true,
    port: 8080
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/]
};
