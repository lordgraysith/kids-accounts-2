// const {getKids} = require('../server/kids-service')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({toot:"toot"})
  });
};
