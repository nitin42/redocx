import React, { Component } from 'react';
import { Hr, Document, Text } from '../src/';

class HrComponent extends Component {
  render () {
    return (
      <Document>
        <Text>Below is a horizontal ruler</Text>
        <Hr />
      </Document>
    );
  }
}

export default HrComponent