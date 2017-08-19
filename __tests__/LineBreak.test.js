import React from 'react';
import { LineBreak, Text } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('should add a line break', () => {
  expect(render(<LineBreak />)).toMatchSnapshot();
})

it('should add a line break when called inside a Text component', () => {
  expect(render(<Text><LineBreak /></Text>)).toMatchSnapshot();
})
