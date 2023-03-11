/**
 * Example application
 */

// package define
const Scraper = require('../src')

// module instance
var scraper = new Scraper()

// a normal status code is returned when the package runs successfully.


scraper.start('https://www.ripe.net/')
