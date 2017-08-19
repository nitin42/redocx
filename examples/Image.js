import React, { Component } from 'react';
import { Image, Document } from '../src/';

class ImageComponent extends Component {
  render () {
    return (
      <Document>
        <Image src='./examples/concr.png' width='300' height='300' align='center' />
      </Document>
    );
  }
}

export default ImageComponent