// webpack.config.js

const webpack = require('webpack');

module.exports = {
  // other webpack configurations...
  plugins: [
    new webpack.DefinePlugin({
      // Define the feature flags here
      '__VUE_PROD_DEVTOOLS__': false, // Example: Disable devtools in production
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false, // Example: Disable hydration mismatch details
    }),
  ],
};
