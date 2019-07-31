# minimal-react-app
like CRA but for the react app base that I prefer


This app bootstraps the following steps:

TLDR of how to make a starter react project from scratch so we don't have a black box toolchain. This guide is no hand holding -- use it if you generally understand how project organization scaffolding works and how JS/Babel/Webpack work together.

## Prerequisites

- npm
- node

### Create a project directory

`mkdir react_from_scratch`

### Initialize node

`npm init`

### Make a general React project structure

In your project directory:

`mkdir public src dist`

`public` - houses static resources

`src` - JS source code

### Add `index.html` to your `public` static resources

```html
<!-- sourced from https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html -->
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>React Starter</title>
</head>

<body>
  <div id="root"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script src="../dist/bundle.js"></script>
</body>

</html>
```

### Install Babel

```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Create `.babelrc` on the project root:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Install Webpack

```bash
npm i webpack-dev-server -g
npm i webpack webpack-cli --save-dev
npm i style-loader css-loader sass-loader node-sass babel-loader --save-dev
```

### Install React

```bash
npm i react react-dom --save
```

### Create  starter React files

In the `src` directory, create the following files.

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
```

```javascript
// App.js
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

class App extends Component{
	render(){
		return(
			<div className="App">
				<h1> Hello, World! </h1>
			</div>
		);
	}
}

export default hot(module)(App);
```

```scss
// App.scss
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

### Start Webpack dev server

From the project root, where `webpack.config.js` is found, use the following command to start a development server:

```bash
node_modules/.bin/webpack-dev-server --mode development
```

By default, this does not build files to the `dist` directory. If you want to do that, you must use Webpack by itself.

```bash
node_modules/.bin/webpack
```

