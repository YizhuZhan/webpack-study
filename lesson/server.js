const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js'); // 引入当前webpack的配置文件
const compiler= webpack(config); // 引入webpack下的编译器，并传入config文件，即可以随时进行代码编译

const app = express();
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
})); // 使用webpackDevMiddleware中间件，接收两个参数，只要文件发生改变，compiler就会重新运行，生成的文件对应的打包输出路径就是配置文件中的publicPath（不使用publicPath也可以，传入空对象或者不传即可）

app.listen(3000, () => {
	console.log('server is running');
});