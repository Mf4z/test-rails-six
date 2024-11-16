const { environment } = require("@rails/webpacker");

const { environment } = require("@rails/webpacker");

const babelLoader = environment.loaders.get("babel");
babelLoader.use[0].options.presets = [
  ["@babel/preset-env", { modules: false }],
];
babelLoader.use[0].options.plugins = [
  "@babel/plugin-proposal-private-methods",
  "@babel/plugin-proposal-class-properties",
];

module.exports = environment;
