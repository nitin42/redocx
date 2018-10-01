import fs from 'fs';
import streams from 'memory-streams';
import { createElement } from '../utils/createElement';
import { WordRenderer } from './renderer';
import parse from './parse';
import { validateElement, validatePath, Events, openDocApp } from '../utils/renderUtils';


async function renderToFile(element, filePath) {
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

async function renderToMemory(element) {
  const container = createElement('ROOT');

  validateElement(element);

  const node = WordRenderer.createContainer(container);

  WordRenderer.updateContainer(element, node, null);

  const output = await parse(container).toBuffer();
  const stream = new streams.WritableStream();

  await new Promise((resolve, reject) => {
    output.doc.generate(stream);
    stream.on('finish', () => {
      resolve();
    });
    stream.on('error', () => {
      reject();
    });
  });

  return stream;
}

/**
 * This function renders the component
 * @param {Object} element
 * @param {string} filePath
 */
async function render(element, filePath) {
  if (typeof filePath !== 'undefined') {
    return renderToFile(element, filePath);
  }
  return renderToMemory(element);
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
