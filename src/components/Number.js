import Root from './Root';
import { renderNodes } from '../utils/nodes';

/**
 * Creates list of numbers (currently unstable)
 */
class NumberItem extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  async renderChildren(align, styles) {
    this.adder = this.root.doc.createListOfNumbers();
    await renderNodes(align, null, styles, this.adder, this.children, this.props);
  }

  async render(align, styles) {
    await this.renderChildren(align, styles);
  }
}

export default NumberItem;
