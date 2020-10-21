const path = require("path");

module.exports = {
    // where code lives
    entry: "./src/index.js",
    // where it's compiled to
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
    },
    module: {
        rules: [{
            // test for certain files
            test: /\.js$/,
            // which loader to exclude
            exclude: /node_modules/,
            // which loader to run
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }

            }
        }]
    }
};
