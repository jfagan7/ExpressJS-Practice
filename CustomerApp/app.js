const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//added comments
var app = express();
/*
var logger = function(req, res, next)
{
  console.log('Logging...');
  next();
}
app.use(logger);
*/
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//Set Static Path
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function (req,res) {
  res.send('Hello');
});

app.listen(3000, function () {
  console.log('Server started on port 3000...');
})
