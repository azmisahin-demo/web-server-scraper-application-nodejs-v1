// assert library
const assert = require('assert').strict

// Target condination.
const target = 'content'
const Content = require('../../src/content')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let content

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // content instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    content = new Content()

    // mock
    let _parameters = Content

    // parameters
    let expected = _parameters

    // operation
    let result = content

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
