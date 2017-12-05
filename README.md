# react-boilerplate

This package is a simple home-grown boilerplate to handle my React.Js projects. Creating a React application using modern JavaScript tools is basically broken down into a couple sections: react, redux, babel, and webpack.

## Installation Notes
```
npm install --save react react-dom react-bootstrap react-router-dom
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-env classnames css-loader eslint eslint-config-airbnb file-loader node-sass sass-loader style-loader url-loader webpack webpack-dev-server
```

### Configurations
*.eslintrc*
```

```

*.bablelrc*
```
{
  "presets": [
    "react",
    "env"
  ]
}
```

*webpack.config.js*
```
const path = require('path');

module.exports = {
  entry: 'path/to/index.js',
  output: {
    path: path.resolve(__dirname, 'path/to/dist/dir'),
    filename: 'bundles.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
```

## Dev Notes
* **npm packages** installed, but aren't currently being used are: `react-fontawesome`, `classnames`, `eslint*`, `file-loader`, `url-loader`.
* **react-router-dom** is a new package for react-router v4. Some things have changed. I also changed the `Header` component from using react-bootstrap to native bootstrap elements because I couldn't figure out how to use `Navbar` with `NavItem` and `Link` components. It rendered nested anchors.

## References
1. https://reactjs.org/docs/installation.html
1. http://babeljs.io/docs/usage/babelrc/
1. https://webpack.js.org/guides/installation/
1. http://redux.js.org
1. https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
1. https://github.com/h5bp/html5-boilerplate
1. https://www.orbitmedia.com/blog/website-footer-design-best-practices/
1. https://sass-guidelin.es/#the-7-1-pattern
1. https://github.com/webpack-contrib/file-loader
1. https://www.youtube.com/watch?v=VdyORTskPGA
