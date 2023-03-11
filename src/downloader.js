'use strict'

/**
 * @file
 * Library for node js projects.
 */

/**
 * dependencies
 */
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

/**
 * @class
 * Downloader Library
 *
 * @example
 *
 *  // module instance
 *  downloader = new Downloader()
 *
 *  // mock
 *  let _parameters = Downloader
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = downloader
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class Downloader {
  /**
   * @constructor
   *
   * @returns {Downloader} Downloader instance.
   */
  constructor() {
    // return instance
    return this
  }

  /**
   * fetch target web content
   * @param {string} url target web address
   */
  async fetchContent(url) {
    // exec
    const { stdout, stderr } = await exec(`curl ${url}`)

    // return content
    return { data: stdout, err: stderr }
  }
}

/**
 * Downloader Library
 * @module template
 */
module.exports = Downloader
