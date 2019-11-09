module.exports = {
  pluginOptions: {
    quasar: {}
  },
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/]
};
