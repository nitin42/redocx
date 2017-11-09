import fs from 'fs';
import {createElement} from '../utils/createElement';
import { WordRenderer } from './renderer';
import parse from './parse';
import { validateElement, validatePath, Events, openDocApp } from '../utils/renderUtils';

/**
 * This function renders the component
 * @param {Object} element
 * @param {string} filePath 
 */
async function render(element, filePath) {
  const container = createElement('ROOT');

  validateElement(element);

  validatePath(filePath);

  const node = WordRenderer.createContainer(container);

  WordRenderer.updateContainer(element, node, null);

  const output = await parse(container).toBuffer();
  const stream = fs.createWriteStream(filePath);

  await new Promise((resolve, reject) => {
    output.doc.generate(stream, Events(filePath, resolve, reject));

    openDocApp(filePath);
  });
}

/**
 * Required for test the components
 */
function testRenderer(element) {
  const container = createElement('ROOT');
  const node = WordRenderer.createContainer(container);

  WordRenderer.updateContainer(element, node, null);

  return container;
}

export { render, testRenderer };
