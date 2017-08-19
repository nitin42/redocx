import React from 'react';
import { Hr } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('should draw a horizontal ruler', () => {
  expect(render(<Hr />)).toMatchSnapshot();
})