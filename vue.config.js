
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Extend the webpack configuration
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
        // Add other feature flags if needed
      })
    ]
  }
});
