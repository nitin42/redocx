/**
 * Render the component (passed to docx generator instance)
 * This is similar to react-pdf https://github.com/diegomura/react-pdf/blob/master/packages/react-pdf/src/index.js
 * @param {Object} input Root component
 */
const parse = (input) => {
  async function parseComponent(inputComponent) {
    const document = inputComponent.document;

    await document.render();

    return inputComponent;
  }

  async function toBuffer() {
    return await parseComponent(input);
  }

  return {
    toBuffer,
  };
};

export default parse;
