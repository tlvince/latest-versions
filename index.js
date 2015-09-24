'use strict'

var got = require('got')

module.exports = function (packages) {
  var keys = JSON.stringify(packages || [])

  var registry = 'https://skimdb.npmjs.com'
  var url = registry + '/registry/_all_docs/?keys=' + keys + '&include_docs=true'
  var options = {
    json: true,
    headers: {
      'user-agent': 'https://github.com/tlvince/latest-versions'
    }
  }

  function getLatest (obj, row) {
    if (row && row.doc && row.doc['dist-tags'] && row.doc['dist-tags'].latest) {
      obj[row.doc.name] = row.doc['dist-tags'].latest
    }
    return obj
  }

  function transform (res) {
    if (!(res && res.body && res.body.rows)) {
      return {}
    }
    return res.body.rows.reduce(getLatest, {})
  }

  return got(url, options)
    .then(transform)
}

