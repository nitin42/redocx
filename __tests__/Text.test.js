import React from 'react';
import { Document, Text, LineBreak, Image, Hr } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  const App = () => (
    <Text>Hello World!</Text>
  )
  expect(render(<App />)).toMatchSnapshot();
});

it('should render the children', () => {
  const App = () => (
    <Text>
      Hello ! This is a test for rendering the children!
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should accept style prop', () => {
  const App = () => (
    <Text style={{ color: 'red' }}>
      I'm red!
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should accept align prop', () => {
  const App = () => (
    <Text align='center'>
      I'm centered!
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render the children with a LineBreak component', () => {
  const App = () => (
    <Text>
      Hello World!
      <LineBreak />
      This is a new line!
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot()
})

it('should render the children with a Image component', () => {
  const App = () => (
    <Text>
      Hello World!
      <Image src='../src/concr.png' />
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot()
})

it('should render the children with a Hr component', () => {
  const App = () => (
    <Text>
      Hello World!
      <Hr />
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot()
})

it('should render with intermediate components', () => {
  const App = () => (
    <Text>
      Hello World!
      <LineBreak />
      This is a new line
      <LineBreak />
      <Hr/>
      <Image src='../src/concr.png' />
    </Text>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should align the children with context', () => {
  const App = () => (
    <Document align='center'>
      <Text>Hello ! I'm centered</Text>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})