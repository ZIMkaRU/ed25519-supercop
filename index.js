var bindings = require('./build/Release/supercop')

exports.sign = function (message, publicKey, secretKey) {
  if (typeof message === 'string') message = Buffer(message)
  else if (!Buffer.isBuffer(message)) {
    throw new Error('message must be a buffer or a string')
  }
  if (typeof publicKey === 'string') publicKey = Buffer(publicKey, 'hex')
  else if (!Buffer.isBuffer(publicKey)) {
    throw new Error('public key must be a buffer or hex string')
  }
  if (typeof secretKey === 'string') secretKey = Buffer(secretKey, 'hex')
  else if (!Buffer.isBuffer(secretKey)) {
    throw new Error('secret key must be a buffer or hex string')
  }
  return bindings.sign(message, publicKey, secretKey)
}