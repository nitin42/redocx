import React, { Component } from 'react';
import { Footer, Document } from '../src/';

class FooterComponent extends Component {
  render () {
    return (
      <Document>
        <Footer style={{ color: 'red', fontFamily: 'Tahoma' }} align='center'>Footer</Footer>
      </Document>
    );
  }
}

export default FooterComponent
