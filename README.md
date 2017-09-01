# redocx
[![Build Status](https://travis-ci.org/nitin42/redocx.svg?branch=master)](https://travis-ci.org/nitin42/redocx)
![yarn](https://img.shields.io/badge/yarn-0.21.3-blue.svg)
![license](https://img.shields.io/packagist/l/doctrine/orm.svg)
![status](https://img.shields.io/badge/status-stable-brightgreen.svg)

> Create word documents with React

<p align='center'>
  <img src='./redocx.png' width='450' height='180' />
</p>

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

**Babel presets and cli**

```
npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-react babel-preset-stage-0
```

**react and redocx**

```
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

* After configuring babel and assuming you've already created a file `example.js` with [this](#example) example, run `babel-node example.js`. This will render your React component to word document.


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

[![Sponsor](https://app.codesponsor.io/embed/FCRW65HPiwhNtebDx2tTc53E/nitin42/redocx.svg)](https://app.codesponsor.io/link/FCRW65HPiwhNtebDx2tTc53E/nitin42/redocx)

