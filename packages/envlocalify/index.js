const localenv = require('localenv/noload')
const path = require('path')
const envify = require('envify')

module.exports = envlocalify

function envlocalify (file, opts) {
  const environment = []

  const filename = {
    production: '.env.production',
    development: '.env'
  }[process.env.NODE_ENV] || '.env'

  if (!opts.envfile) {
    environment.push(filename)
  } else {
    environment.push(opts.envfile)
  }

  environment.forEach(env => {
    localenv.inject_env(path.resolve(process.cwd(), env))
  })

  return envify()
}
