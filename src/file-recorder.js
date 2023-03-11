'use strict'

/**
 * @file
 * Library for node js projects.
 */

/**
 * dependencies
 */
const fs = require('fs')
const path = require('path')

/**
 * @class
 * FileRecorder Library
 *
 * @example
 *
 *  // module instance
 *  fileRecorder = new FileRecorder()
 *
 *  // mock
 *  let _parameters = FileRecorder
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = fileRecorder
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class FileRecorder {
  /**
   * @constructor
   *
   * @returns {FileRecorder} FileRecorder instance.
   */
  constructor() {
    // return instance
    return this
  }

  /**
   * Is there a directory or file?
   * @param {string} fullPath
   * @returns bool
   */
  async _isThere(fullPath) {
    // Is there a directory or file?
    return await fs.existsSync(fullPath)
  }

  /**
   * Configure folder path
   * @param {string} folderPath
   * @returns bool
   */
  async _configureFolder(folderPath) {
    // configure folder
    return (await this._isThere(folderPath)) || fs.mkdirSync(folderPath, { recursive: true })
  }

  /**
   * Write a file
   * @param {string} folderPath folder path
   * @param {string} fileName file name
   * @param {string} data data
   * @returns bool
   */
  async sync(folderPath, fileName, data) {
    // os file path
    const filePath = path.join(folderPath, fileName)

    // configure folder
    await this._configureFolder(folderPath)

    // file writing
    await fs.writeFileSync(filePath, data)

    // created
    return await this._isThere(filePath)
  }
}

/**
 * FileRecorder Library
 * @module fileRecorder
 */
module.exports = FileRecorder
