# Extra

## Top-Level Document Object

The [render]() method returns a top-level document object. This object contains information about [document instance](https://github.com/Ziv-Barber/officegen#creating-the-document-object) which
includes document information (author, description, title, etc) and the component instance, which further includes information about
children, props, root instance.

High level picture -

```
document:
  Document {
  children: [ [Object] ],
  root: [Circular],
  props: { children: [Object] },
  adder:
  MakeDocxP {
  docType: 'docx',
  genPrivate: [Object],
  ogPluginsApi: [Object],
  msPluginsApi: [Object],
  genobj: [Object],
  data: [],
  extraSettings: {},
  options: [Object],
  mainPath: 'word',
  mainPathFile: 'document',
  relsMain: [Object],
  relsApp: [Object],
  filesList: [Object],
  srcFilesList: [Object] } } }
```
