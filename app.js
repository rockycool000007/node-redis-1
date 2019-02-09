var redis = require('redis');
var redisClient = redis.createClient({ host: 'localhost', port: 6379  });

// Check if Redis server is ready
redisClient.on('ready', function() {
  console.log("Redis is ready");
});


// Check if there is any error in starting Redis
redisClient.on('error', function() {
  console.log("Error in Redis Configuration");
});


// Pass password to the Redis server
redisClient.auth('password', function(err, reply) {
  console.log(reply);
});


// Set language in the code
// Go to redis-cli => GET language
redisClient.set("language", "This is nodejs");


// Another way of setting a key value pair
redisClient.set("language", "This is .Net", function(err, reply) {
  console.log(err);
  console.log(reply);
});


// Another way of getting a value from key
redisClient.get("language", function(err, reply) {
  console.log(err);
  console.log(reply);
});


// Set hashtable (json format) with value "uid" using hmset
redisClient.hmset("uid", "webserver", "expressjs", "db", "mysql", function(err, reply) {
  console.log(err);
  console.log(reply);
});


// Get hashtable value with the key "uid" using hgetall
redisClient.hgetall("uid", function(err, reply) {
  console.log(err);
  console.log(reply);
});


// Check if key exists
redisClient.exists('language', function(err, reply) {
  if(!err) {
    if(reply === 1) {
      console.log("Key exists");
    } else {
      console.log("Key does not exist");
    }
  }
});


// Delete a key
redisClient.del('redisClient', function(err, reply) {
  if(!err) {
    if(reply === 1) {
      console.log("Key is deleted");
    } else {
      console.log("Key does not exist");
    }
  }
});


// Set expiry time of 30 seconds for a key
redisClient.expire('redisClient', 30); 
