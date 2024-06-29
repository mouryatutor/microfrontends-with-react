const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
       new ModuleFederationPlugin({
        name: "container",
        remotes: {
            products: "products@https://cuddly-space-funicular-x55g7jpvjppvfv47w-8081.app.github.dev/remoteEntry.js",
            carts: "carts@https://cuddly-space-funicular-x55g7jpvjppvfv47w-8082.app.github.dev/remoteEntry.js",
        },
        shared: {
            
        }
       }),
       new HtmlWebpackPlugin({
        template: './public/index.html'
       }) 
    ]
}