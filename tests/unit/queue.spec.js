// assert library
const assert = require('assert').strict

// Target condination.
const target = 'queue'
const Queue = require('../../src/queue')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let queue

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // queue instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    queue = new Queue()

    // mock
    let _parameters = Queue

    // parameters
    let expected = _parameters

    // operation
    let result = queue

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
