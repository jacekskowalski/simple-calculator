var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
			{test: /\.(png|svg|jpg|gif|ico)$/,  use: ['file-loader'] }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        })
    ]

}