import React from 'react';
import { List, Document, BulletItem, NumberItem } from '../src/';
import { applyStyles, applyImageProps, styleSerializer } from '../src/styles/styles';

it('children can be colored with a hex', () => {
  const props = {
    color: '#ffffff',
    backgroundColor: '#ff0000'
  }

  expect(applyStyles(props)).toMatchSnapshot();
})

it('children can be styled', () => {
  const props = {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    fontSize: '40',
    fontFace: 'Tahoma',
    bold: true,
    border: true,
    underline: true,
    italic: true,
    highlight: '#ff2222',
    borderSize: '40',
    borderColor: '#ff3',
    link: 'www.google.com'
  }

  expect(applyStyles(props)).toMatchSnapshot();
})

it('image size can be adjusted with style prop', () => {
  const props = {
    style: {
      width: '200',
      height: '200'
    }
  }

  expect(applyImageProps(props)).toMatchSnapshot()
})

it('image size can be adjusted with width and height prop', () => {
  const props = {
    width: '200',
    height: '200'
  }

  expect(applyImageProps(props)).toMatchSnapshot()
})

it('table styles can be serialized according to open office xml layout', () => {
  const styles = {
    bold: true,
    size: '20',
    color: 'mistyrose', 
    align: 'center',
    vAlign: 'center', 
    fontFamily: 'Tahoma', 
    fill: '#ffffff', 
    cellColWidth: 4261
  }

  expect(styleSerializer(styles)).toMatchSnapshot();
})
