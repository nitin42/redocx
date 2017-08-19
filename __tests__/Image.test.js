import React from 'react';
import { Image } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  expect(render(<Image />)).toMatchSnapshot();
})

it('should render an image', () => {
  const App = () => (
    <Image src='../src/concr.png' />
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render an image and align it', () => {
  const App = () => (
    <Image src='../src/concr.png' align='justify' />
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render an image and adjust it size with style prop', () => {
  const App = () => (
    <Image src='../src/concr.png' style={{ width: '400', height: '400'}} />
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render an image and adjust it size with width and height prop', () => {
  const App = () => (
    <Image src='../src/concr.png' width='400' height='400' />
  )

  expect(render(<App />)).toMatchSnapshot();
})