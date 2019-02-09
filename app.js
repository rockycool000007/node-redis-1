var redis = require('redis');
var redisClient = redis.createClient({ host: 'localhost', port: 6379  });

redisClient.on('ready', function() {
  console.log("Redis is ready");
});

redisClient.on('error', function() {
  console.log("Error in Redis Configuration");
});

redisClient.auth('password', function(err, reply) {
  console.log(reply);
});

// redis-cli => GET language
redisClient.set("language", "This is nodejs");

redisClient.set("language", "This is .Net", function(err, reply) {
  console.log(err);
  console.log(reply);
});

redisClient.get("language", function(err, reply) {
  console.log(err);
  console.log(reply);
});

redisClient.hmset("uid", "webserver", "expressjs", "db", "mysql", function(err, reply) {
  console.log(err);
  console.log(reply);
});

redisClient.hgetall("uid", function(err, reply) {
  console.log(err);
  console.log(reply);
});
