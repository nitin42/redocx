import Root from './Root';

/**
 * This component draw a horizontal line
 */
class Hr extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.name = 'Hr';
  }

  async render() {
    await (this.parent === null ? this.root.doc.createP().addHorizontalLine() : null);
  }
}

export default Hr;
