var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
	"jest": {
 "moduleNameMapper": {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    }
}
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