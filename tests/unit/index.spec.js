// assert library
const assert = require('assert').strict

// Target condination.
const target = 'scraper'
const Scraper = require('../../src')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let scraper

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // template instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    scraper = new Scraper()

    // mock
    let _parameters = Scraper

    // parameters
    let expected = _parameters

    // operation
    let result = scraper

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
