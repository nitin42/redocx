import React, { Component } from 'react';
import { List, BulletItem, Document } from '../src/';

class ListComponent extends Component {
  render () {
    return (
      <Document>
        <List>
          <BulletItem align='center'>Item one</BulletItem>
          <BulletItem>Item two</BulletItem>
          <BulletItem>Item three</BulletItem>
        </List>
      </Document>
    );
  }
}

export default ListComponent