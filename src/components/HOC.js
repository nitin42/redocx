import { renderNodes } from '../utils/nodes';

/**
 * High order component for rendering header and footer
 * @param {string} component Component name
 * @param {string} fn Function name
 */
function hoc(component, fn) {
  class _Component {
    children = [];

    constructor(root, props) {
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
      this.adder = fn === 'getHeader' ? this.root.doc.getHeader().createP() : this.root.doc.getFooter().createP();
      await renderNodes(align, this.props.align, styles, this.adder, this.children, this.props);
    }

    async render(align, styles) {
      await this.renderChildren(align, styles);
    }
  }

  return _Component;
}

export default hoc;
