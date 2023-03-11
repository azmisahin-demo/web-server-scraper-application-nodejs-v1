// assert library
const assert = require('assert').strict

// Target condination.
const target = 'fileRecorder'
const FileRecorder = require('../../src/file-recorder')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let fileRecorder

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
    fileRecorder = new FileRecorder()

    // mock
    let _parameters = FileRecorder

    // parameters
    let expected = _parameters

    // operation
    let result = fileRecorder

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
