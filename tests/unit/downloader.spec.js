// assert library
const assert = require('assert').strict

// Target condination.
const target = 'downloader'
const Downloader = require('../../src/downloader')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let downloader

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // downloader instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    downloader = new Downloader()

    // mock
    let _parameters = Downloader

    // parameters
    let expected = _parameters

    // operation
    let result = downloader

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
