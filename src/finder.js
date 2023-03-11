'use strict'

/**
 * @file
 * Library for node js projects.
 */

/**
 * @class
 * Finder Library
 *
 * @example
 *
 *  // module instance
 *  finder = new Finder()
 *
 *  // mock
 *  let _parameters = Finder
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = finder
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class Finder {
  /**
   * @constructor
   *
   * @returns {Finder} Finder instance.
   */
  constructor() {
    // return instance
    return this
  }

  /**
   * they will be excluded
   * @returns string
   */
  excluded() {
    //
    return (
      ':not([href$="#"])' +
      ':not([href$=".png"])' +
      ':not([href$=".jpg"])' +
      ':not([href$=".mp4"])' +
      ':not([href$=".mp3"])' +
      ':not([href$=".gif"])'
    )
  }

  /**
   * they will be selected and excluded
   * @returns string
   */
  selectors() {
    //
    return 'a[href^="/"]' + this.excluded()
  }

  /**
   * Lists hyperlinks in the DOM.
   * @param {Document} dom
   * @returns NodeList
   */
  async hyperlinks(dom) {
    // selects items that match the document's specified selector set
    let result = dom.querySelectorAll(this.selectors())

    // NodeList
    return result
  }
}

/**
 * Finder Library
 * @module finder
 */
module.exports = Finder
