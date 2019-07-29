let faker = require('faker');
exports.handler = function(event, context, callback) {
    
    callback(null, {"message": faker.internet.userName()});
}