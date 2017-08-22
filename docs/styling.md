# Styling 💄

#### You can use [glamorous-redocx](https://github.com/nitin42/glamorous-redocx) to style the redocx components. Check it out because it's awesome!

## Style properties for the component
Below are the style properties for Text, Document, List, Header, Footer, BulletItem and NumberItem components.

| Property  | Type | Default | 
| ------------- | ------------- | ------------- |
| `backgroundColor`  | `string`  |
| `bold`  | `boolean`  | `false` |
| `border`  | `string`  |
| `borderSize`  | `number`  | 
| `borderColor`  | `string`  
| `color`  | `string`  |
| `fontSize`  | `number`  |
| `fontFace`  | `string`  |
| `highlight`  | `string`  |
| `italic`  | `boolean`  | `false` |
| `link`  | `string`  |  |
| `underline` | `boolean` | `false` 

`border` can take values `'single'`, `'dashDotStroked'`, `'dashed'`, `'dashSmallGap'`, `'dotDash'`, `'dotDotDash'`, `'dotted'`, `'double'`, `'thick'`, etc.

## Style attributes for <Image \/> component

| Property  | Type | Default | 
| ------------- | ------------- | ------------- |
| `width`  | `number`  | 
| `height`  | `number`  |  |

or you can pass a style object describing the image dimensions.

```
{ width: 200, height: 200 }
```

## <Table \/> component

### Style properties for each heading

| Property  | Type | Default | 
| ------------- | ------------- | ------------- |
| `bold`  | `boolean`  | `false`
| `size`  | `number`  |  |
| `color`  | `string`  |  |
| `align`  | `string`  |  |
| `valign`  | `string`  |  |
| `fontFamily`  | `string`  |  |
| `fill`  | `string`  |  |
| `cellColWidth`  | `number`  |  |

### Table styles

| Property  | Type | Default | 
| ------------- | ------------- | ------------- |
| `tableColWidth`  | `number`  | 
| `tableSize`  | `number`  |  |
| `tableColor`  | `string`  |  |
| `tableAlign`  | `string`  |  |
| `borders`  | `boolean`  | `false` |

> I am experimenting with the [yoga](https://facebook.github.io/yoga/) layout. If that goes well, then flex layout will also be supported 😄
