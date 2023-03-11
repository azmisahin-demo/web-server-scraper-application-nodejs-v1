/**
 * Example application
 */

// package define
const Scraper = require('../src')

// module instance
var scraper = new Scraper()

// a normal status code is returned when the package runs successfully.
process.exit(scraper instanceof Scraper == true ? 0 : 1)
