/**
 * Base class that keeps track of parent and child nodes
 */
class Root {
  parent = null;
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  appendChild(child) {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    child.parent = null;
    this.children.splice(index, 1);
  }

  async renderChildren() {
    for (let i = 0; i < this.children.length; i += 1) {
      await this.children[i].render();
    }
  }
}

export default Root;
