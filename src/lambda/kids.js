// const {getKids} = require('../server/kids-service')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: '[{"id":1,"name":"Karli","mainAccount":{"id":1,"kidId":1,"accountTypeId":1,"accountType":"Main","balance":100}},{"id":2,"name":"Jack","mainAccount":{"id":2,"kidId":2,"accountTypeId":1,"accountType":"Main","balance":100}}]'
  });
};
