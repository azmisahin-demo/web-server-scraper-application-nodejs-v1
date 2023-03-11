// assert library
const assert = require('assert').strict

// Target condination.
const target = 'finder'
const Finder = require('../../src/finder')

/**
 * dependencies
 */
const { JSDOM } = require('jsdom')
const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="#click">click</a>
    <a href="/test">test</a>
  </body>
</html>
`)

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let finder
  let mock = { document: dom.window.document }

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

  /**
   * Hyperlinks in the DOM should be listed.
   */
  it(`${target}.hyperlinks`, async function () {
    // module instance
    finder = new Finder()

    // mock
    let _parameters = 1

    // parameters
    let expected = _parameters

    // operation
    let result = await finder.hyperlinks(mock.document)

    // result
    let actual = result.length

    // condination
    assert(actual >= expected)
  })
})
