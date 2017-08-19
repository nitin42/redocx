import fs from 'fs';
import path from 'path';
import minimatch from 'minimatch';
import execa from 'execa';
import createElement from '../utils/createElement';
import { WordRenderer } from './renderer';
import parse from './parse';

/**
 * Document element
 * @param {Object} element 
 */
function validateElement(element) {
  if (element === undefined || element === null) {
    throw new Error('Invalid component element.');
  }

  if (typeof element === 'string') {
    throw new Error(
      'Invalid component element. Instead of passing string like \'text\', pass a class or functional component. For example - <Document />',
    );
  }
  return true;
}

/**
 * Filepath for the document
 * @param {string} filePath 
 */
function validatePath(filePath) {
  if (filePath === null || filePath === undefined) {
    throw new Error('Please specify a file path for the document');
  }

  const fileName = path.basename(filePath);
  const pattern = '*.docx';

  if (!minimatch(fileName, pattern)) {
    throw new Error(`Invalid filename '${path.basename(filePath)}'. Make sure the extension is '.docx'`);
  }
  return true;
}

/**
 * This function renders the component
 * @param {Object} element
 * @param {string} filePath 
 */
async function render(element, filePath) {
  const container = createElement('ROOT');

  if (!validateElement(element)) {
    return;
  }

  if (!validatePath(filePath)) {
    return;
  }

  const node = WordRenderer.createContainer(container);

  WordRenderer.updateContainer(element, node, null);

  const output = await parse(container).toBuffer();
  const stream = fs.createWriteStream(filePath);

  await new Promise((resolve) => {
    output.doc.generate(stream);
    console.log(`✨  Word document created at ${path.resolve(filePath)} !`);
    execa.shell(`open -a pages ${path.resolve(filePath)}`);
    resolve();
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
