module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/*.js',
      'test/*.js'
    ],
    reporters: ['spec'],
    browsers: ['ChromeHeadless']
  })
}
