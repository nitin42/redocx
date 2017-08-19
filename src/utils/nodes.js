import { applyStyles } from '../styles/styles';

/**
 * This function renders the text content and apply the corresponding styles to it
 * @param {string} child Child node
 * @param {Object} props Component props
 * @param {Object} styles Style attributes
 * @param {Object} instance Document instance
 */
async function renderText(child, props, styles, instance) {
  await instance.addText(child, (props.style ? applyStyles(props.style) : applyStyles(styles)));
}

/**
 * 
 * @param {Object} instance Document instance
 * @param {string} alignWithContext Align (Document component)
 * @param {string} alignThroughProp Align prop
 */
function alignChildren(instance, alignWithContext, alignThroughProp) {
  return instance.options.align = alignWithContext ? alignWithContext : alignThroughProp;
}

/**
 * This function renders all the text nodes
 * @param {string} alignWithContext Align (Document component)
 * @param {string} alignThroughProp Align prop
 * @param {Object} styles Style attributes
 * @param {Object} instance Document instance
 * @param {Array} children Child node
 * @param {Object} props Component props
 */
async function renderNodes(alignWithContext, alignThroughProp, styles, instance, children, props) {
  alignChildren(instance, alignWithContext, alignThroughProp);
  for (let i = 0; i < children.length; i += 1) {
    if (typeof children[i] === 'string') {
      await renderText(children[i], props, styles, instance);
    }
  }
}

export { renderText, alignChildren, renderNodes };
