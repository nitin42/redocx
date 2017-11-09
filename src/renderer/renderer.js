/* eslint-disable */

import emptyObject from 'fbjs/lib/emptyObject'
const Reconciler = require('react-reconciler')

import { createElement, getHostContextNode } from '../utils/createElement'

const RendererHostConfig = {
	appendInitialChild(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child)
		} else {
			parentInstance.document = child
		}
	},

	createInstance(type, props, internalInstanceHandle) {
		return createElement(type, props)
	},

	createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
		return text
	},

	finalizeInitialChildren(wordElement, type, props) {
		return false
	},

	getPublicInstance(inst) {
		return inst
	},

	prepareForCommit() {
		// noop
	},

	prepareUpdate(wordElement, type, oldProps, newProps) {
		return true
	},

	resetAfterCommit() {
		// noop
	},

	resetTextContent(wordElement) {
		// Redocx does not have a text node like DOM
	},

	// If you've such use case where you need to provide data from the root instance,
	// see the below example. This may help you in creating your own custom renderer
	
	createInstance(type, props, internalInstanceHandle) {
		// 'internalInstanceHandle' is not transparent here. So use host context methods
		// to get data from roots
		return createElement(type, props)
	},

	// Use this current instance to pass data from root
	getRootHostContext(instance) {
		// getHostContextNode here updates the internal state of createElement and stores a ref to current instance
    return getHostContextNode(instance)
	},

	getChildHostContext() {
		return emptyObject
	},

	shouldSetTextContent(type, props) {
		return false // Redocx does not have a text node like DOM
	},

	now: () => {},

	useSyncScheduling: true,

	mutation: {
		appendChild(parentInstance, child) {
			if (parentInstance.appendChild) {
				parentInstance.appendChild(child)
			} else {
				parentInstance.document = child
			}
		},

		appendChildToContainer(parentInstance, child) {
			if (parentInstance.appendChild) {
				parentInstance.appendChild(child)
			} else {
				parentInstance.document = child
			}
		},

		removeChild(parentInstance, child) {
			parentInstance.removeChild(child)
		},

		removeChildFromContainer(parentInstance, child) {
			parentInstance.removeChild(child)
		},

		insertBefore(parentInstance, child, beforeChild) {
			// noob
		},

		commitUpdate(instance, updatePayload, type, oldProps, newProps) {
			// noop
		},

		commitMount(instance, updatePayload, type, oldProps, newProps) {
			// noop
		},

		commitTextUpdate(textInstance, oldText, newText) {
			textInstance.children = newText
		},
	},
}

const WordRenderer = Reconciler(RendererHostConfig)

export { WordRenderer }