# API Reference

* [render](#renderelement-filepath)
* [Components](#components)
   * [Document](#document-)
   * [Text](#text-)
   * [List](#list-)
   * [BulletItem](#bulletitem-)
   * [NumberItem](#numberitem--currently-unstable)
   * [Header](#header-)
   * [Footer](#footer-)
   * [Horizontal Line](#hr-)
   * [LineBreak](#linebreak-)
   * [PageBreak](#pagebreak-)
   * [Table](#table-)
   * [Image](#image-)
   * [Platform](#platform)


## render(element, filepath)

Renders a React element to word document with a filepath and returns a top-level [document object](https://github.com/nitin42/redocx/blob/master/docs/misc.md).

### parameters

#### `element` (required)

React element

#### `filepath` (required)

filepath for the document

#### Example

```js
const SampleDocument = () => (
  <Document>
    <Text>Hello World</Text>
  </Document>
)

render(<SampleDocument />,  `${__dirname}/example.docx`)
```

### Render the documents to memory mapped stream

You can also render the documents straight to memory mapped stream. For example - 

```jsx
import { Component } from 'react'
import { Document, Text } from 'redocx'

class App extends Component {
  render() {
    return (
      <Document>
        <Text style={{ color: 'red' }}>Hello World</Text>
      </Document>
    );
  }
}

render(<App />).then((stream) => {
  fs.open('sample.docx', 'w+', stream.length, null, (err, fd) => {
    if (err) {
      console.log(err);
    }

    fs.write(fd, stream.toBuffer(), (writeErr) => {
      if (writeErr) {
        console.log(writeErr);
      }
      console.log('Docx generated and saved to sample.docx');
    });
  });
});
```

## Components

### <Document \/>

Wrapper for the child components.

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `align`  | `string`  | `left` | align the child components |
| `children`  | `Node`   |   |  |
| `style`  | `object`   |  `{}` | style the child components |
| `info`  | `object`   |  `{}` | information about the document such as author, subject, keywords and description of the document |

#### Example

```js
const DocumentComponent = () => (
  <Document 
    align='center' 
    style={{ color: 'red', fontSize: 20 }}
    info={{ author: 'Nitin', description: 'Sample document' }}
    >
    Hello World
  </Document>
```

Data that you can pass into `info` prop -

```
{
  author: string,
  description: string,
  keywords: string,
  orientation (default is 'portrait'): string,
  subject: string,
  title: string
}
```

### <Text \/>

Creates a new paragraph.

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `align`  | `string`  | `left` | align the text |
| `children` | `Node`
| `style`  | `object`   |  `{}` | style the text |

#### Example

```js
const TextComponent = () => (
  <Text style={{ color: 'mistyrose', bold: true }} align='right'>
    Hello World
  </Text>
)
```

### <List \/>

Wrapper for the list items (list of dots and numbers).

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `children` | `Node`
| `style`  | `object`   |  `{}` | style for all the list items |

#### Example

```js
const ListComponent = () => (
  <List style={{ fontSize: 40 }}>
    <BulletItem>Manchester United</BulletItem>
    <BulletItem>Chelsea</BulletItem>
    <BulletItem>Liverpool</BulletItem>
  </List>
)

```

### <BulletItem \/>

Creates a list of dots

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `children` | `Node`
| `style`  | `object`   |  `{}` | style for each list item |

#### Example

```js
const ListDots = () => (
  <List>
    <BulletItem style={{ color: 'blue' }}>Item one</BulletItem>
    <BulletItem style={{ fontSize: 30 }}>Item two</BulletItem>
    <BulletItem style={{ backgroundColor: 'purple' }}>Item three</BulletItem>
  </List>
)
```

### <NumberItem \/> (Currently unstable)

Creates a list of numbers

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `children` | `Node`
| `style`  | `object`   |  `{}` | style for each list item |

#### Example

```js
const ListDots = () => (
  <List>
    <NumberItem style={{ color: 'blue' }}>Item one</NumberItem>
    <NumberItem style={{ fontSize: 30 }}>Item two</NumberItem>
    <NumberItem style={{ backgroundColor: 'purple' }}>Item three</NumberItem>
  </List>
)
```

### <Header \/>

Creates a header for the document

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `align` | `string` | `left` | align the header
| `children` | `Node`
| `style`  | `object`   |  `{}` | style for header |

#### Example

```js
const HeaderComponent = () => (
  <Header style={{ fontSize: 40, bold: true, fontFamily: 'Tahoma' }}>
    This is a header
  </Header>
)
```

### <Footer \/>

Creates a footer for the document

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `align` | `string` | `left` | align the footer
| `children` | `Node`
| `style`  | `object`   |  `{}` | style for footer |

#### Example

```js
const HeaderComponent = () => (
  <Footer style={{ fontSize: 40, bold: true, fontFamily: 'Tahoma' }}>
    This is a header
  </Footer>
)
```

### <Hr \/>

Draws a horizontal line

#### Example 

```js
const DrawHr = () => <Hr />
```

### <LineBreak \/>

Puts a line break

#### Example 

```js
const LineBr = () => <LineBreak />
```

### <PageBreak \/>

Puts a page break

#### Example 

```js
const PageBr = () => <PageBreak />
```

### <Table \/>

Creates a table

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `headers`  | `array`   |  `[]` | headings and corresponding style for each heading (array of objects where each object has two properties, `value` and `styles`) |
| `data`  | `array`   |  `[]` | data for each heading (array of arrays where each array contains data for each heading) |
| `style`  | `object`   |  `{}` | table styles |

#### Example 

```js
const tableStyle = {
	tableColWidth: 4261, // Width of each column
	tableSize: 24, // Table size
	tableColor: 'red', // Content color
	tableAlign: 'center', // Align content
	borders: true, // Borders
};

const HEADERS = [
  {
    value: 'Phone',
    styles: {
      color: 'red',
      bold: true,
      size: 10
    }
  },
  {
    value: 'Capacity',
    styles: {
      color: 'blue',
      bold: true,
      size: 10
    }
  }
]

const DATA = [
  ['iPhone 7', '128GB'],
  ['iPhone 5SE', '64GB']
]

const TableComponent = () => (
  <Table headers={HEADERS} data={DATA} style={tableStyle} />
)
```

### <Image \/>

Adds an image

#### Props

| Prop  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| `src`  | `string`   |   | image source |
| `align`  | `string`   |  `left` | align the image |
| `width`  | `number`   |   | width of the image |
| `height`  | `number`    |  | height of the image |
| `style`  | `object`   |  {} | style attributes of the image (height and image)|


#### Example

```js
const ImageComponent = () => (
  <Image src='./xyz/one.png' align='center' width='200' height='200' />
)
```

### Platform

A lot of other custom renderers ([react-sketchapp](https://github.com/airbnb/react-sketchapp), [react-tv](https://github.com/raphamorim/react-tv) all have it). It's useful for platform differences within universal components.

#### Usage

```js
import { Platform } from 'redocx'

Platform.OS // 'word'

const obj = {
  word: { /** some platform specific code that you want to run **/ }
}

// Then use it like this
Platform.select(obj)
```

> It's still experimental and may change in future.
