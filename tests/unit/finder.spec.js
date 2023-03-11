// assert library
const assert = require('assert').strict

// Target condination.
const target = 'finder'
const Finder = require('../../src/finder')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let finder

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // finder instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    finder = new Finder()

    // mock
    let _parameters = Finder

    // parameters
    let expected = _parameters

    // operation
    let result = finder

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
