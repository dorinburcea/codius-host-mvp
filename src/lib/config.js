'use strict'

const { validateString, validateInteger, validateJson } = require('../util/validate')

class Config
{
  /**
   * Default behavior is to read configuration from the environment.
   *
   * If you want to add your own configuration, override this constructor.
   */
  constructor () {
    this.applyConfig(process.env)
  }

  /**
   * Takes some config variables and applies them to the current object.
   *
   * @param  {Config} config    Destination config object
   * @param  {Object} sourceObj Some object to parse, e.g. process.env
   */
  applyConfig (sourceObj) {
    this.port = validateInteger(sourceObj, 'CODIUS_PORT', 443)
    this.hostId = validateString(sourceObj, 'CODIUS_HOST_ID', 'default')
    this.ilpPlugin = validateString(sourceObj, 'CODIUS_ILP_PLUGIN', 'ilp-plugin-xrp-escrow')
    this.ilpCredentials = validateJson(sourceObj, 'CODIUS_ILP_CREDENTIALS')
  }
}

module.exports = Config
