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
  let origin = 'https://www.ripe.net/'

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

  /**
   * must be the content of the target data.
   */
  it(`${target}.fetchContent`, async function () {
    // module instance
    downloader = new Downloader()

    // mock
    let _parameters = null

    // parameters
    let expected = _parameters

    // operation
    let result = await downloader.fetchContent(origin)

    // result
    let actual = result

    // condination
    assert(actual != expected)
  })
})
