/* eslint-disable */

import ReactFiberReconciler from 'react-dom/lib/ReactFiberReconciler';
import emptyObject from 'fbjs/lib/emptyObject';
import createElement from '../utils/createElement';

// Comments are for my own reference

/**
 * Lifecyle of the renderer
 */
const WordRenderer = ReactFiberReconciler({

  /**
   * Create component instance
   */
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    return createElement(type, props, rootContainerInstance);
  },
  
  /**
   * Append the children. If children are wrapped inside a parent container, then push all the children
   * inside it else we create a property called `document` on a parent node and append all the childrens
   * to it and render them with `property_name.render()`.
   */
  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.document = child;
    }
  },

  appendChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    } else {
      parentInstance.document = child;
    }
  },

  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },

  insertBefore(parentInstance, child, beforeChild) {
    // noob
  },

  /**
   * Final call / check before flushing to the host environment
   */
  finalizeInitialChildren(testElement, type, props, rootContainerInstance) {
    return false;
  },

  /**
   * Prepare the update with new props
   */
  prepareUpdate(testElement, type, oldProps, newProps, hostContext) {
    return true;
  },

  /**
   * Commit the update (diff the old and new props)
   */
  commitUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    internalInstanceHandle,
  ) {
    // noop
  },

  commitMount(
    instance,
    type,
    newProps,
    rootContainerInstance,
    internalInstanceHandle,
  ) {
    // noop
  },

  /**
   * Keeps track of the current location in tree
   */

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  getPublicInstance(inst) {
    return inst;
  },

  /**
   * Disable callbacks during DOM manipulation
   */
  prepareForCommit() {
    // noop
  },

  resetAfterCommit() {
    // noop
  },

  shouldSetTextContent(props) {
    return false;
  },

  resetTextContent(testElement) {
    // noop
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle,
  ) {
    return text;
  },

  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.chidren = newText;
  },
  
  useSyncScheduling: true,
});

export {
  WordRenderer,
};
