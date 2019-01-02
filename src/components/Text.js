import path from 'path';
import Root from './Root';
import { applyImageProps } from '../styles/styles';
import { validateTextProps } from '../validators/componentValidators';
import { alignChildren, renderText } from '../utils/nodes';

/**
 * This component creates a new paragraph with every new instance and renders the children.
 * It wraps LineBreak and Image component as intermediate component and calls the corresponding 
 * render method. This behaviour may change depending on new use cases (from open office xml)
 */
class Text extends Root {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = props;
    validateTextProps(this.props);
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  setParent = (node, childName) => node.parent = (node.name === childName ? 'Text' : null);

  /**
   * Render intermediate components (LineBreak, Image and Hr)
   * Not enough use cases (couldn't derive more use cases from open office xml)
   */
  async renderIntermediateComponents(child, instance) {
    switch (child.name) {
      case 'LineBreak':
        // LineBreak component should not be called as an independent component.
        await instance.addLineBreak();
        break;
      case 'Image':
        // Here we keep track of render() method for Image component as this avoids rendering - 
        // the Image component twice because Document component also calls render() method on all -
        // of its children. So we set its parent to 'Text' component and it calls render() once -
        // and avoids a second render() call by setting its parent to 'Text'. By default, if we -
        // call Image component as an independent component, it has a parent null || 'Document' -
        // so it calls the render() only once.

        this.setParent(child, 'Image');
        // child.name === 'Image' ? (child.parent = 'Text') : (child.parent = null);
        await instance.addImage(path.resolve(child.props.src), applyImageProps(child.props));
        break;
      case 'Hr':
        // Same thing happening here also!
        this.setParent(child, 'Hr');
        await instance.addHorizontalLine();
        break;
      default:
        break;
    }
  }

  async renderChildren(align, styles) {
    // 创建操作对象应该在回调函数进行，在构造方法中创建会导致和其他类型组件一起排版
    // createP should be in a renderChildren function,
    // In the constructor to create leads to typeset together with other types of components
    this.adder = this.root.doc.createP();
    // 对齐
    alignChildren(this.adder, align, this.props.align);

    // 段首缩进firstLine:'240'
    // 段前间距spacing.before
    // 段后间距spacing.after
    // 行间距spacing.line
    // docx.createP ({firstLine:'240', spacing : {before: '340', after: '330', line: '578'}});
    this.props.firstLine && (this.adder.options.firstLine = this.props.firstLine);
    this.props.spacing && (this.adder.options.spacing = this.props.spacing);

    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        await renderText(this.children[i], this.props, styles, this.adder);
      } else {
        await this.renderIntermediateComponents(this.children[i], this.adder);
      }
    }
  }

  async render(align, styles) {
    await this.renderChildren(align, styles);
  }
}

export default Text;
