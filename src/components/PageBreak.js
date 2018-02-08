import Root from './Root';

/**
 * This component adds a page break.
 */
class PageBreak extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
  }

  async render() {

    await this.root.doc.putPageBreak();
  }
}

export default PageBreak;
