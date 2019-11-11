module.exports = {
  pluginOptions: {
    quasar: {}
  },
  devServer: {
    disableHostCheck: true,
    port: 8080
  },
  pwa: {
    name: "GroundWrk",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/]
};
