'use strict'

/**
 * @file
 * Library for node js projects.
 */

const Queue = require('package-storage-javascript')
const Scheuler = require('./scheduler')

/**
 * @class
 * Scraper Library
 *
 * @example
 *
 *  // module instance
 *  scraper = new Scraper()
 *
 *  // mock
 *  let _parameters = Scraper
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = scraper
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class Scraper {
  /**
   * @constructor
   *
   * @returns {Scraper} Scraper instance.
   */
  constructor() {
    this.queue = new Queue()

    new Scheuler(this.queue)

    // return instance
    return this
  }

  async start(origin) {
    await this.queue.addItem('links', { link: origin, date: new Date() })
  }
}

/**
 * Scraper Library
 * @module scraper
 */
module.exports = Scraper
