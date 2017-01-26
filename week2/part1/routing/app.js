const express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log('Server received a GET request.');
  res.send('Thank you for your GET request');
});

app.post('/', function(req, res){
  console.log('Server received a POST request.');
  res.send('Thank you for your POST request');
});

app.delete('/', function(req, res){
  console.log('Server received a DELETE request.');
  res.send('Thank you for your DELETE request');
});

app.patch('/', function(req, res){
  console.log('Server received a PATCH request.');
  res.send('Thank you for your PATCH request');
});

app.get('/secret', function(req, res){
  console.log('Server received a GET request on the secret end.');
  res.send('Thank you for your GET request');
});

app.get('/secret/:id', function(req, res){
  console.log('Server received a GET request on the secret end with id: %s.', req.params.id);
  res.send('Thank you for your GET request');
});

app.listen(3000, function() {
  console.log("Express server listening at PORT 3000");
});
