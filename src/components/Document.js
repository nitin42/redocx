import { validateDocProps } from '../validators/componentValidators';
import { applyStyles } from '../styles/styles';

/**
 * This component wraps all the children (string, components) and renders them.
 * It only takes two props, 'align' for alignment of the document and 'info' for adding
 * document information like name of the author and description of the document. 
 */

class Document {
  // Store all the children here
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
    // Create a new paragraph
    this.adder = this.root.doc.createP();
    // Align the children which are of type string
    this.adder.options.align = this.props.align;
    // Add document information
    Object.assign(this.root.doc.options, this.props.info ? this.props.info : {});
    // Validate the component props
    validateDocProps(this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  async renderChildren() {
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        // If not a component, render it as a paragraph
        await this.adder.addText(
          this.children[i], this.props.style ? applyStyles(this.props.style) : {},
        );
      } else if (typeof this.children[i] === 'object') {
        // Call render() for each component
        await this.children[i].render(this.props.align, this.props.style ? this.props.style : {});
      }
    }
  }

  async render() {
    await this.renderChildren();
  }
}

export default Document;
