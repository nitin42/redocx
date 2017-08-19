import {
  BulletItem,
  Document,
  Footer,
  Header,
  Hr,
  Image,
  NumberItem,
  LineBreak,
  List,
  PageBreak,
  Table,
  Text,
  WordDocument,
} from '../components/index';

/**
 * Creates an element for a document
 * @param {string} type Element type
 * @param {Object} props Component props
 * @param {Object} root Root instance
 */
function createElement(type, props, root) {
  // Hash table lookup is much better than evaluating each case with switch-case
  const COMPONENTS = {
    ROOT: () => new WordDocument(),
    TEXT: () => new Text(root, props),
    DOCUMENT: () => new Document(root, props),
    IMAGE: () => new Image(root, props),
    LIST: () => new List(root, props),
    NUMBERITEM: () => new NumberItem(root, props),
    BULLETITEM: () => new BulletItem(root, props),
    HR: () => new Hr(root, props),
    TABLE: () => new Table(root, props),
    LINEBREAK: () => new LineBreak(root, props),
    PAGEBREAK: () => new PageBreak(root, props),
    HEADER: () => new Header(root, props),
    FOOTER: () => new Footer(root, props),
    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export default createElement;
