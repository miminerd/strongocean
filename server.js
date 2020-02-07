//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/calendar'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/calendar/index.html'));
});

app.get('/', function(request, response) {
  response.send('Hello World!')
})

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 8080, function(){
  console.log('Listening on port ' + server.address().port);
});