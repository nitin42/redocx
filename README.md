# redocx
[![Build Status](https://travis-ci.org/nitin42/redocx.svg?branch=master)](https://travis-ci.org/nitin42/redocx)
![yarn](https://img.shields.io/badge/yarn-0.21.3-blue.svg)
![license](https://img.shields.io/packagist/l/doctrine/orm.svg)
![status](https://img.shields.io/badge/status-beta-brightgreen.svg)

> Create word documents with React

## Introduction

`redocx` is a library which lets you create word documents with React. It provides a set of components which renders your declarative views and components to word documents. 

#### Example 

A simple component that renders a "Hello World" text to a word document.

```js
import React from 'react'
import { render, Document, Text } from 'redocx'

class App extends React.Component {
  render() {
    return (
      <Document>
        <Text>Hello World</Text>
      </Document>
    )
  }
}

render(<App />, `${__dirname}/example.docx`)
```

Let's get started!


## Install

> Still in beta

If babel presets and cli are not installed globablly, add them as dev dependencies: 

```
npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-react babel-preset-stage-0

npm install --save react redocx
```

## Usage

* Create a `.babelrc`

```
{
  "presets": [
    "env",
    "stage-0",
    "react"
  ]
}
```

* Make sure you've installed [`babel-cli`](https://babeljs.io/docs/usage/cli/)

* After configuring babel and assuming you've already created a file `example.js` with [this](#example) example, run `babel-node example.js`. This will render your React component to word document.

> `redocx` will soon have a new cli to automate this process making it easy to generate word documents with React!

## Demo

```
git clone https://github.com/nitin42/redocx.git
cd redocx
npm install
npm run example
```

## Documentation

See the detailed documentation [here](./docs)

## Contributing

[Contributing guide](https://github.com/nitin42/redocx/blob/master/CONTRIBUTING.md)

## License

MIT


