const express = require('express');
var app  = express();

app.get('/', function(req, res){
  console.log("HTTP Request Object:")
  console.log(req);
  console.log("Response Object:")
  console.log(res);

  res.send("See you Node console to check the `res` and `res`.")
});

app.listen(3000, function() {
  console.log("Node server listening on port %s", 3000);
});
