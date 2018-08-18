const rn = require('random-number');
const useragent = require('useragent');

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: 'success',
      random: rn({ min: 0, max: 10000000, integer: true }),
      useragent: useragent.parse(event.headers['user-agent'])
    })
  });
};