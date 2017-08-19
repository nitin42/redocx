import React, { Component } from 'react';
import { Header, Document } from '../src/';

class HeaderComponent extends Component {
  render () {
    return (
      <Document>
        <Header style={{ color: 'mistyrose', bold: true }} align='center'>Heading</Header>
      </Document>
    );
  }
}

export default HeaderComponent