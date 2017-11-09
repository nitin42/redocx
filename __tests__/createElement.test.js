import React from 'react';
import {createElement} from '../src/utils/createElement';

it('should create an element', () => {
  const inst = createElement('ROOT')
  expect(inst).toMatchSnapshot();
})