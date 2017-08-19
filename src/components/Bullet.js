import Root from './Root';
import { renderNodes } from '../utils/nodes';

/**
 * This component renders a list of dots
 */
class BulletItem extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
    this.adder = this.root.doc.createListOfDots();
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.slice(index, 1);
  }

  async renderChildren(align, styles) {
    await renderNodes(align, null, styles, this.adder, this.children, this.props);
  }

  async render(align, styles) {
    await this.renderChildren(align, styles);
  }
}

export default BulletItem;
