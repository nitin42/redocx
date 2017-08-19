# redocx

> Create word documents with React
<br/>
<p align='center'>
  <img src='./redocx.png' width='500' height='200'/>
</p>


## Introduction

`redocx` is a library which lets you create word documents with React. It provides a set of components which renders your declarative views and components to word documents. 

**Example** - A simple component that renders a "Hello World" text to a word document.

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

**npm**

```
npm install redocx --save
```

**yarn**

```
yarn add redocx
```

Assuming you've already installed [React](https://facebook.github.io/react).

## Documentation

See the detailed documentation [here](./docs)

## Contributing

[Contributing guide](./https://github.com/nitin42/redocx/blob/master/CONTRIBUTING.MD)

## License

MIT


