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
  let mock = {
    folderPath: 'temp/web',
    fileName: 'index.html',
    document: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>    
    `,
  }

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

  /**
   * The object must be in the file system.
   */
  it(`${target}.is-there`, function () {
    // module instance
    fileRecorder = new FileRecorder()

    // mock
    let _parameters = mock

    // parameters
    let expected = false

    // operation
    let result = fileRecorder._isThere(_parameters.folderPath)

    // result
    let actual = result

    // condination
    assert(actual != expected)
  })

  /**
   * The directory must be configured in the file system.
   */
  it(`${target}.configure-folder`, function () {
    // module instance
    fileRecorder = new FileRecorder()

    // mock
    let _parameters = mock

    // parameters
    let expected = false

    // operation
    let result = fileRecorder._configureFolder(_parameters.folderPath)

    // result
    let actual = result

    // condination
    assert(actual != expected)
  })

  /**
   * It should be able to write files to the file system.
   */
  it(`${target}.sync`,async function () {
    // module instance
    fileRecorder = new FileRecorder()

    // mock
    let _parameters = mock

    // parameters
    let expected = true

    // operation
    let result = await fileRecorder.sync(
      _parameters.folderPath,
      _parameters.fileName,
      _parameters.document
    )

    // result
    let actual = result

    // condination
    assert(actual == expected)
  })
})
