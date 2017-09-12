/**
 * Render the component (passed to docx generator instance)
 * This is similar to react-pdf https://github.com/diegomura/react-pdf/blob/master/packages/react-pdf/src/index.js
 * @param {Object} input Root component
 */
const parse = (input) => {
  async function parseComponent(inputComponent) {
    // This property is accessed due to https://github.com/nitin42/redocx/blob/master/src/renderer/renderer.js#L32  
    const document = inputComponent.document;

    await document.render();
    // Return the input component again because we rendered the children
    // which weren't wrapped inside a parent.
    // We async called the render method on all of the children.
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
