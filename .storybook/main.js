const path = require("path");

module.exports = {
  stories: [
    "../pages/**/*.stories.(js|mdx|tsx)",
    "../modules/**/*.stories.(js|mdx|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "storybook-addon-next-router",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: { reactDocgen: "react-docgen" },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@modules": path.resolve(__dirname, "..", "modules"),
    };
    return config;
  },
};
