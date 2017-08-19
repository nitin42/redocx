import React from 'react';
import { Footer, Document } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  expect(render(<Footer />)).toMatchSnapshot();
})

it('should render a footer', () => {
  expect(render(<Footer>Hello World</Footer>)).toMatchSnapshot();
})

it('should render a footer and align it', () => {
  expect(render(<Footer align='center'>Hello World</Footer>)).toMatchSnapshot();
})

it('should render a footer and style it', () => {
  expect(render(<Footer style={{ color: 'mistyrose'}}>Hello World</Footer>)).toMatchSnapshot();
})

it('can be aligned and styled by <Document /> component', () => {
  const App = () => (
    <Document align='center' style={{ color: 'mistyrose' }}>
      <Footer>Footer</Footer>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})