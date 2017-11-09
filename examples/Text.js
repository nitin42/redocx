import React, { Component } from 'react';
import { Text, Document } from '../src/';

const TextStyles = {
  color: 'red',
  fontSize: 30
};

class TextComponent extends Component {
  render() {
    return (
      <Document>
        <Text style={TextStyles} align="center">
          Hello World!
        </Text>
      </Document>
    );
  }
}

export default TextComponent;
