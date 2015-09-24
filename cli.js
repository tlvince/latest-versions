#!/usr/bin/env node
'use strict'

var npmLatest = require('./')

var packages = process.argv.slice(2)

if (!packages.length) {
  process.exit()
}

npmLatest(packages)
  .then(console.log.bind(console))
  .catch(function (err) {
    if (err.response && err.response.body) {
      console.error(err.response.body)
    }
    process.exit(1)
  })
