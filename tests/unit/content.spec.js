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
  let document = `
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
  `

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

  /**
   * It must be a DOM that can be manipulated.
   */
  it(`${target}.load`, function () {
    // module instance
    content = new Content()

    // mock
    let _parameters = { type: 'root' }

    // parameters
    let expected = _parameters.type

    // operation
    let result = content.load(document)

    // result
    let actual = result.type

    // condination
    assert(actual == expected)
  })

  /**
   * It must have at least two children.
   */
  it(`${target}.load-three-two-children`, function () {
    // module instance
    content = new Content()

    // mock
    let _parameters = {
      type: 'root',
      children: [
        { name: '!doctype', type: 'directive' },
        { name: 'html', type: 'tag' },
      ],
    }

    // parameters
    let expected = _parameters.children.length

    // operation
    let result = content.load(document)

    // result
    let actual = result.children.length

    // condination
    assert(actual >= expected)
  })
})
