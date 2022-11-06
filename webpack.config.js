const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Anasayfa",
      filename: "index.html", //output
      template: "./src/views/home.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "Hakkimizda",
      filename: "about.html", //output
      template: "./src/views/about.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "İşlemci",
      filename: "cpu.html", //output
      template: "./src/views/cpu.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "register",
      filename: "register.html", //output
      template: "./src/views/register.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "register",
      filename: "login.html", //output
      template: "./src/views/login.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "checkout",
      filename: "checkout.html", //output
      template: "./src/views/checkout.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "success",
      filename: "success.html", //output
      template: "./src/views/success.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "product",
      filename: "product.html", //output
      template: "./src/views/product.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "gpu",
      filename: "gpu.html", //output
      template: "./src/views/gpu.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "motherboard",
      filename: "motherboard.html", //output
      template: "./src/views/motherboard.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "ram",
      filename: "ram.html", //output
      template: "./src/views/ram.html",  //input
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "ssd",
      filename: "ssd.html", //output
      template: "./src/views/ssd.html",  //input
    }),


    // [].concat(
    //   pages.map(
    //     (page) =>
    //       new HtmlWebpackPlugin({
    //         inject: "body",
    //         title: `${page} Page || Kara Keçi`,
    //         template: `./src/${page}.html`,
    //       })
    //   )
    // ),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      // Images loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    compress: true,
    liveReload: true,
    hot: true,
    port: 9000,
  },
};
