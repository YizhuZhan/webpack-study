const path = require('path');

module.exports = {
	mode: "development",
    entry: {
    	main: './src/index.js'
    },
    module: {
    	rules: [
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
	        	test: /\.scss$/,
	            use: [
	                "style-loader", // 将 JS 字符串生成为 style 节点
	                "css-loader",
	                // {
	                // 	loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
	                // 	options: {
	                // 		// importLoaders: 2, // 在 css-loader 前应用的 loader 的数量，即保证会走到post-loader和sass-loader，而不是直接走css-loader
	                // 		// modules: true // 开启css模块化打包
	                // 	}
	                // }, 
	                "sass-loader", // 将 Sass 编译成 CSS，默认使用 Node Sass
	                "postcss-loader"
	       //          {
				    // 	loader: 'postcss-loader', // 需要配置autoprefixer插件
				    //   	options: {
				    //     	ident: 'postcss',
					   //      plugins: [
					   //        	require('autoprefixer')
					   //      ]
	      	// 			}
    				// } 
	            ]
	        }
    	]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}