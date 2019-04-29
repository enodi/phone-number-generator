const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = (env) => {
  const modeConfig = require(`./client/builds/webpack.${env.mode}`);
  return merge(baseConfig, { mode: env.mode }, modeConfig);
};
