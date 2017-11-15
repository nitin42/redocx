/**
 * This component renders a list of dots or numbers
 */
class List {
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
    // Override the styles and use List component styles
    // expected an assignment
    styles = this.props.style ? this.props.style : styles;
    for (let i = 0; i < this.children.length; i += 1) {
      await this.children[i].render(align, styles);
    }
  }

  async render(align, styles) {
    await this.renderChildren(align, styles);
  }
}

export default List;
