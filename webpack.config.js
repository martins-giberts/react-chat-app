function buildConfig(env) {
  return require('./webpack/' + env + '.config.js')(env)
}

module.exports = buildConfig
