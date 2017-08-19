import React from 'react';
import { PageBreak } from '../src/';
import { testRenderer as render } from '../src/renderer/render';

it('should put a page break', () => {
  expect(render(<PageBreak />)).toMatchSnapshot();
})
