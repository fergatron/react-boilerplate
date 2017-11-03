# react-boilerplate

This package is a simple home-grown boilerplate to handle my React.Js projects. Creating a React application using modern JavaScript tools is basically broken down into a couple sections: react, redux, babel, and webpack.

## Installation Notes
```
npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-env
```

### Configurations
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
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'path/to/index.js'),
  output: {
    path: path.resolve(__dirname, 'path/to/public/dir'),
    filename: 'bundles.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env']
      }
    }]
  }
}
```


## References
1. https://reactjs.org/docs/installation.html
1. http://babeljs.io/docs/usage/babelrc/
1. https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
