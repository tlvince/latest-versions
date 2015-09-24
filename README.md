# latest-versions

> Get the latest versions of given npm packages

Like [latest-version][], but supports querying multiple packages at once.

[latest-version]: https://github.com/sindresorhus/latest-version

## Usage

```js
var latestVersions = require('latest-versions')
var packages = [
  'scratchdb',
  'pouchdb',
  'nano'
]
latestVersions(packages)
  .then(console.log.bind(console))
  //=> { scratchdb: '1.0.0', pouchdb: '4.0.3', nano: '6.1.5' }
  .catch(console.error.bind(console))
```

## CLI

```shell
$ npm i -g latest-versions
$ latest-versions scratchdb pouchdb nano
{ scratchdb: '1.0.0', pouchdb: '4.0.3', nano: '6.1.5' }
```

## Author

© 2015 Tom Vincent <https://tlvince.com/contact>

## License

Released under the [MIT License](http://tlvince.mit-license.org).
