import React, { Component } from 'react';
import { Table, Document } from '../src/';

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

class TableComponent extends Component {
  render() {
    return (
      <Document>
        <Table headers={HEADERS} data={DATA} style={tableStyle} />
      </Document>
    );
  }
}

export default TableComponent;