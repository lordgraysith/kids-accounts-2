const {login} = require('./routes/authenticate')

const routes = {
  login
}
exports.handle = async (params) => {
  const {operation} = params;
  if (!(operation in routes)) {
    throw Error('operation not supported')
  }
}