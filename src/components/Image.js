import path from 'path';
import { applyImageProps } from '../styles/styles';
import { alignChildren } from '../utils/nodes';
import Root from './Root';

/**
 * We need the parent class because it keeps the track of the parent node and the -
 * Image component and calls the render method depending upon where the component -
 * lies. For example - If Image component is children of Text component -
 * then its parent is Text component not the main Document component so we avoid -
 * calling render method on it twice
 */
class Image extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
    this.name = 'Image';
  }

  async renderImage(align) {
    // “≥√º±Í÷æ
    if (this.props.headFootFlag === 'head') {
      this.adder = this.root.doc.getHeader().createP();
    } else if (this.props.headFootFlag === 'foot') {
      this.adder = this.root.doc.getFooter().createP();
    } else {
      this.adder = this.root.doc.createP();
    }

    // Align the image with context by Document or through component prop 'align'
    alignChildren(this.adder, align, this.props.align);

    await this.adder.addImage(path.resolve(this.props.src), applyImageProps(this.props));
  }

  async render(align) {
    await (this.parent === null ? this.renderImage(align) : null);
  }
}

export default Image;
