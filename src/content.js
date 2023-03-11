'use strict'

/**
 * @file
 * Library for node js projects.
 */

/**
 * dependencies
 */
const parser = require('htmlparser2')

/**
 * @class
 * Content Library
 *
 * @example
 *
 *  // module instance
 *  content = new Content()
 *
 *  // mock
 *  let _parameters = Content
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = content
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class Content {
  /**
   * @constructor
   *
   * @returns {Content} Content instance.
   */
  constructor() {
    // return instance
    return this
  }

  /**
   * load html content
   * @param {string} document HTML Document
   * @returns DOM
   */
  load(document) {
    // parse document
    const dom = parser.parseDocument(document)
    
    // DOM (document object model)
    return dom
  }
}

/**
 * Content Library
 * @module content
 */
module.exports = Content
