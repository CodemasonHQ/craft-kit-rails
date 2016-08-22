module.exports = {
  name: 'rails',
  default: ["ruby", "postgres"],
  masonJson: {
  	ruby: require('./mason-json/ruby.js'),
  	postgres: require('./mason-json/postgres.js')
  },
}