const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { find } = require('lodash')
const errors = require('../errors')
const config = require('../config')

const login = async (event) => {
  try {
    const { password } = event.params
    const hash = crypto.createHash('sha256')
    hash.update(password)
    const username = findUserByPassword(hash.digest('base64'))
    if (!username) {
      throw Error(errors.UNAUTHORIZED.id)
    }
    const authToken = jwt.sign({ username }, config.get('authSecret'), {
      expiresIn: '1 day'
    })
    return{ authToken }
  } catch (ex) {
    console.log(ex.message)
    throw Error((ex.message in errors && errors[ex.message].message) || ex.message)
  }
};

function findUserByPassword (password) {
  const user = find(config.passwords, u => {
    return u.password === password
  })
  if (user) {
    return user.username
  } else {
    return null
  }
}

module.exports = {
  login
}
