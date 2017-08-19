import React, { Component } from 'react';
import { LineBreak, Document, Text } from '../src/';

class LineBreakComponent extends Component {
  render () {
    return (
      <Document>
        <Text>
          Hello World!
          <LineBreak />
          This is a new line!
        </Text>
      </Document>
    );
  }
}

export default LineBreakComponent