'use strict'

/**
 * @file
 * Library for node js projects.
 */

let Downloader = require('./downloader')
const Content = require('./content')
const Finder = require('./finder')
const downloader = new Downloader()
const content = new Content()
const finder = new Finder()
const FileRecorder = require('./file-recorder')
const fileRecorder = new FileRecorder()

/**
 * @class
 * Scheuler Library
 *
 * @example
 *
 *  // module instance
 *  scheuler = new Scheuler()
 *
 *  // mock
 *  let _parameters = Scheuler
 *
 *  // parameters
 *  let expected = _parameters
 *
 *  // operation
 *  let result = scheuler
 *
 *  // result
 *  let actual = result
 *
 *  // condination
 *  assert(actual instanceof expected)
 *
 */
class Scheuler {
  /**
   * @constructor
   * @param {Queue}
   * @returns {Scheuler} Scheuler instance.
   */
  constructor(queue) {
    setInterval(async () => {
      console.log("tick")
      // read item
      let partition = await queue.readItem('links', 0)
      
      if (partition) {
        
        let url = new URL(partition.link)
        
        console.log("que", url)

        let fileName = 'index.html'
        let folderPath = url.pathname
        let { data, err } = await downloader.fetchContent(partition.link)

        if (!err) {
          console.log('errrrrrrr')
          await fileRecorder.sync('temp' + folderPath, fileName, data)
          let dom = await content.load(data)
          let nodeList = await finder.hyperlinks(dom)

          try {
            nodeList.forEach((element) => {
              queue.add(element.href)
            })
          } catch (error) {
            //
            console.error('nodelist #%d', error)
          }
        }
      }
    }, 5000)
    // return instance
    return this
  }
}

/**
 * Scheuler Library
 * @module scheuler
 */
module.exports = Scheuler
