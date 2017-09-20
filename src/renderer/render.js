import fs from 'fs';
import createElement from '../utils/createElement';
import { WordRenderer } from './renderer';
import parse from './parse';
import { validateElement, validatePath, Events, openDocApp } from '../utils/renderUtils';
import { Writable } from 'stream';
import { Buffer } from 'buffer';

class BufferWriteStream extends Writable {
  constructor() {
    super(...arguments);
    this.data = [];
  }

  getBuffer() {
    return Buffer.concat(this.data);
  }

  _write(buffer) {
    console.log('write', buffer)
    this.data.push(buffer);
  }
}

/**
 * This function renders the component
 * @param {Object} element
 * @param {string} filePath 
 */

async function createParsedDocument(element) {
  const container = createElement('ROOT');
  validateElement(element);
  const node = WordRenderer.createContainer(container);
  WordRenderer.updateContainer(element, node, null);
  const output = await parse(container).toBuffer();
  return output;
}

async function createBuffer(element) {
  const parsedDoc = await createParsedDocument(element);
  const stream = new BufferWriteStream();
  return new Promise((resolve, reject) => {
    parsedDoc.doc.generate(stream, {
      error: reject,
      finalize(written) {
        console.log('finalie', written)
        process.nextTick(() => console.log(stream.data.length))
      }
    });
  })
}

async function render(element, filePath) {
  validatePath(filePath);
  const output = await createParsedDocument(element);
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

export { render, testRenderer, createBuffer };
