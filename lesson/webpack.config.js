const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
	mode: "development",
	devtool: 'cheap-module-eval-source-map', // 线上mode:production时，建议使用'cheap-module-source-map'
	devServer: {
		contentBase: './dist', // 在dist目录下启动服务器
		open: true, // 自动打开浏览器
		hot: true, // 开启HMR功能（热模块更新）
		hotOnly: true, // 即便HMR没有生效，也不让浏览器自动刷新
		// port: 8090, // 默认8080
	},
    // entry: './src/index.js',
    entry: {
    	main: './src/index.js',
    	// sub: './src/index.js'
    },
    module: {
    	rules: [
    		{ 
	        	test: /\.js$/, 
	        	exclude: /node_modules/, // 如果检测到代码在node_module中，就不使用babel-loader，没有必要对第三方代码转成es5（第三方已转好）
	        	loader: "babel-loader",
	    //     	options: {
	    //     		"presets": [ // 开发业务代码时，只需要配置presets即可
					//     [
					//     	"@babel/preset-env",
					//     	{
					//     		"useBuiltIns": "usage",// 用了什么就把什么打包到main.js里面
					//     		// "corejs": 3,
					//     		targets: {
					// 		    	// edge: "17",
					// 		    	// firefox: "60",
					// 		    	chrome: "67",
					// 		    	// safari: "11.1"
					// 		    }
					//     	}
					//     ]
					// ]

					// // "plugins": [ // 开发库项目，使用plugin配置，不需要presets
					// //     [
					// // 	    "@babel/plugin-transform-runtime",
					// // 	    {
					// // 	        "corejs": 2,
					// // 	        "helpers": true,
					// // 	        "regenerator": true,
					// // 			"useESModules": false
					// // 	   }
					// //    ]
					// // ]
	    //     	}
	        },
    		{
    			test: /\.(jpg|png|gif)$/,
    			use: [{
    				loader: 'url-loader',
    				options: {
    					// 占位符
    					name: '[name]_[hash].[ext]', // 打包出的图片名字是老图片的名字_hash值.老图片的后缀
    				    outputPath: 'images/',
    				    limit: 1024
    				}
    			}]
    		},
    		{
    			test: /\.(eot|ttf|svg|woff)$/,
    			use: {
    				loader: 'file-loader'
    			}
    		},
	        {
	        	test: /\.scss$/,
	            use: [
	                "style-loader", // 将 JS 字符串生成为 style 节点
	                {
	                	loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
	                	options: {
	                		importLoaders: 2, // 在 css-loader 前应用的 loader 的数量，即保证会走到post-loader和sass-loader，而不是直接走css-loader
	                		// modules: true // 开启css模块化打包
	                	}
	                }, 
	                "sass-loader", // 将 Sass 编译成 CSS，默认使用 Node Sass
	                // "postcss-loader"
	                {
				    	loader: 'postcss-loader', // 需要配置autoprefixer插件
				      	options: {
				        	ident: 'postcss',
					        plugins: [
					          	require('autoprefixer')
					        ]
	      				}
    				} 
	            ]
	        },
	        {
	        	test: /\.css$/,
	            use: [
	                "style-loader", // 将 JS 字符串生成为 style 节点
	                {
	                	loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
	                	options: {
	                		importLoaders: 2, // 在 css-loader 前应用的 loader 的数量，即保证会走到post-loader和sass-loader，而不是直接走css-loader
	                		// modules: true // 开启css模块化打包
	                	}
	                }, 
	                {
				    	loader: 'postcss-loader', // 需要配置autoprefixer插件
				      	options: {
				        	ident: 'postcss',
					        plugins: [
					          	require('autoprefixer')
					        ]
	      				}
    				} 
	            ]
	        }
    	]
    },
    plugins: [
	    new HtmlWebpackPlugin({
	    	template: 'src/index.html'
	    }), new CleanWebpackPlugin(),
	    // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // publicPath: 'http:cdn.home.cn',
        publicPath: '/', // 表示所有打包生成的文件前都加一个根路径，确保打包生成的文件路径上不会有问题（不加也可以）
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    
}