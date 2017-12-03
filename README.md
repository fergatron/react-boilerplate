# react-boilerplate

This package is a simple home-grown boilerplate to handle my React.Js projects. Creating a React application using modern JavaScript tools is basically broken down into a couple sections: react, redux, babel, and webpack.

## Installation Notes
```
npm install --save react react-dom react-bootstrap
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-env eslint eslint-config-airbnb webpack webpack-dev-server
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
    filename: 'bundles.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
```


## References
1. https://reactjs.org/docs/installation.html
1. http://babeljs.io/docs/usage/babelrc/
1. https://webpack.js.org/guides/installation/
1. http://redux.js.org
1. https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
1. https://github.com/h5bp/html5-boilerplate
1. https://www.orbitmedia.com/blog/website-footer-design-best-practices/
