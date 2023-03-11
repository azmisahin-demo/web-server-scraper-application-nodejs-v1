// assert library
const assert = require('assert').strict

// Target condination.
const target = 'scheduler'
const Scheduler = require('../../src/scheduler')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let scheduler

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // scheduler instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, async function () {
    // module instance
    scheduler = new Scheduler()

    // mock
    let _parameters = Scheduler

    // parameters
    let expected = _parameters

    // operation
    let result = scheduler

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
