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

// Stores the root container instance
let ROOT_NODE_INSTANCE = null

/**
 * Updates the ref to ROOT_NODE_INSTANCE
 * @param {*} rootNode root instance
 */
function getHostContextNode(rootNode) {
  if (typeof rootNode !== undefined) {
    return ROOT_NODE_INSTANCE = rootNode
  } else {
    console.warn(`${rootNode} is not an instance of officegen docx constructor.`)    
    // Lazily create the instance (escape hatch if the global state is mutated)
    return ROOT_NODE_INSTANCE = new WordDocument()
  }
}

/**
 * Creates an element for a document
 * @param {string} type Element type
 * @param {Object} props Component props
 * @param {Object} root Root instance
 */

function createElement(type, props) {
  // Hash table lookup is much better than evaluating each case with switch-case
  const COMPONENTS = {
    ROOT: () => new WordDocument(),

    DOCUMENT: () => new Document(ROOT_NODE_INSTANCE, props),

    TEXT: () => new Text(ROOT_NODE_INSTANCE, props),
    LIST: () => new List(ROOT_NODE_INSTANCE, props),
    NUMBERITEM: () => new NumberItem(ROOT_NODE_INSTANCE, props),
    BULLETITEM: () => new BulletItem(ROOT_NODE_INSTANCE, props),

    HR: () => new Hr(ROOT_NODE_INSTANCE, props),

    LINEBREAK: () => new LineBreak(ROOT_NODE_INSTANCE, props),
    PAGEBREAK: () => new PageBreak(ROOT_NODE_INSTANCE, props),

    TABLE: () => new Table(ROOT_NODE_INSTANCE, props),
    
    IMAGE: () => new Image(ROOT_NODE_INSTANCE, props),
    
    HEADER: () => new Header(ROOT_NODE_INSTANCE, props),
    FOOTER: () => new Footer(ROOT_NODE_INSTANCE, props),

    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement,
  getHostContextNode,
}
