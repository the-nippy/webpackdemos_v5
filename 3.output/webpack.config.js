/*
 * @Author: xuwei
 * @Date: 2021-03-22 20:53:27
 * @LastEditTime: 2021-03-22 20:54:38
 * @LastEditors: xuwei
 * @Description: 在Webpack4 中，可以不配置任何配置文件，但是相较于输入命令和参数，配置文件依然高效的多
 */

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
