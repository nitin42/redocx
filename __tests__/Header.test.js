import React from 'react';
import { Header, Document } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  expect(render(<Header />)).toMatchSnapshot();
})

it('should render a header', () => {
  expect(render(<Header>Hello World</Header>)).toMatchSnapshot();
})

it('should render a header and align it', () => {
  expect(render(<Header align='center'>Hello World</Header>)).toMatchSnapshot();
})

it('should render a header and style it', () => {
  expect(render(<Header style={{ color: 'mistyrose'}}>Hello World</Header>)).toMatchSnapshot();
})

it('can be aligned and styled by <Document /> component', () => {
  const App = () => (
    <Document align='center' style={{ color: 'mistyrose' }}>
      <Header>Header</Header>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})