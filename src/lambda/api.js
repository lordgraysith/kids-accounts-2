const querystring = require('querystring')
const api = require('../server');
exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = querystring.parse(event.body);
  return api.handle({params, ...event})
};
