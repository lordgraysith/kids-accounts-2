import {getKids} from '../server/kids-service'

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(await getKids())
  };
};
