import path from 'path';
import os from 'os';
import execa from 'execa';
import minimatch from 'minimatch';

/* eslint-disable no-unused-expressions */
/**
 * Open the doc app
 */
function openDocApp(file) {
  os.platform() === 'darwin' ? execa.shell(`open -a pages ${path.resolve(file)}`) : null;
}

/**
 * Document element
 * @param {Object} element 
 */
function validateElement(element) {
  if (!element) {
    throw new Error('Render method expected an element.');
  }

  if (typeof element === 'string') {
    throw new Error("Invalid component element. Instead of passing string like 'text', pass a class or functional component. For example - <Document />");
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

function Events(filePath, resolve, reject) {
  return {
    finalize: () => {
      console.log(`✨  Word document created at ${path.resolve(filePath)}.`);
      resolve();
    },
    error: () => {
      console.log('An error occurred while generating the document.');
      reject();
    },
  };
}

export { Events, openDocApp, validateElement, validatePath };
