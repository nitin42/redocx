import React from 'react';
import { Table } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

const tableStyle = {
  tableColWidth: 4261, // Width of each column
  tableSize: 24, // Table size
  tableColor: 'red', // Content color
  tableAlign: 'center', // Align content
  borders: true, // Borders ? 😅
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

const DATA =         [
  ['iPhone 7', '128GB'],
  ['iPhone 5SE', '64GB']
]

it('should render a table with some data', () => {
  expect(render(<Table headers={[{value: 'Name', styles: { color: 'red'}}]} data={[['Nitin']]} />)).toMatchSnapshot();
})

it('should render a table with data and style prop', () => {
  const App = () => (
    <Table
      headers={HEADERS}
      data={DATA}
    />
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a table with table style prop', () => {
  const App = () => (
    <Table
      headers={HEADERS}
      data={DATA}
      style={tableStyle}
    />
  )

  expect(render(<App />)).toMatchSnapshot();
})