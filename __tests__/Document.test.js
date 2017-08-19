import React from 'react';
import { Document, Text } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  expect(render(<Document />)).toMatchSnapshot();
})

it('should render the children type string', () => {
  expect(render(<Document>Hello!</Document>)).toMatchSnapshot();
})

it('should render the children component', () => {
  const App = () => (
    <Document>
      <Text>Hmm...</Text>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render the children component and align them', () => {
  const App = () => (
    <Document align='center'>
      <Text>Hmm...</Text>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render the children component and apply styles to them', () => {
  const App = () => (
    <Document style={{ color: 'mistyrose' }}>
      <Text>Hmm...</Text>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})