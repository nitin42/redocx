import React from 'react';
import { List, Document, BulletItem, NumberItem } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('sanity check', () => {
  expect(render(<List />)).toMatchSnapshot()
})

it('should render a list of dots', () => {
  const App = () => (
    <List>
      <BulletItem>One</BulletItem>
      <BulletItem>Two</BulletItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of numbers (currently unstable)', () => {
  const App = () => (
    <List>
      <NumberItem>One</NumberItem>
      <NumberItem>Two</NumberItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of dots with style prop', () => {
  const App = () => (
    <List style={{ color: 'red' }}>
      <BulletItem>One</BulletItem>
      <BulletItem>Two</BulletItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of dots with align prop', () => {
  const App = () => (
    <List align='center'>
      <BulletItem>One</BulletItem>
      <BulletItem>Two</BulletItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of dots and each item can be styled and aligned individually', () => {
  const App = () => (
    <List>
      <BulletItem align='center' style={{color: 'red'}}>One</BulletItem>
      <BulletItem>Two</BulletItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of numbers with align prop', () => {
  const App = () => (
    <List align='center'>
      <NumberItem>One</NumberItem>
      <NumberItem>Two</NumberItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list of numbers and each item can be styled and aligned individually', () => {
  const App = () => (
    <List>
      <NumberItem align='center' style={{color: 'red'}}>One</NumberItem>
      <NumberItem>Two</NumberItem>
    </List>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list and aligned through context', () => {
  const App = () => (
    <Document align='center'>
      <List>
        <NumberItem>One</NumberItem>
        <NumberItem>Two</NumberItem>
      </List>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})

it('should render a list and styled through context', () => {
  const App = () => (
    <Document style={{ color: 'blue'}}>
      <List>
        <NumberItem>One</NumberItem>
        <NumberItem>Two</NumberItem>
      </List>
    </Document>
  )

  expect(render(<App />)).toMatchSnapshot();
})
