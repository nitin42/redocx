import Root from './Root';

/**
 * This component adds a page break.
 */
class PageBreak extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.adder = this.root.doc.putPageBreak();
  }

  async render() {
    await this.adder;
  }
}

export default PageBreak;
