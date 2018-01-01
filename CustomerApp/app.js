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

//View Engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Set Static Path
app.use(express.static(path.join(__dirname,'public')));

var users  = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmith@gmail.com'
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'jilljackson@gmail.com'
  }
]

app.get('/',function (req,res) {
  res.render('index',{
    title: 'Customer',
    users: users
  });
});

app.post('/users/add', function(req,res)
{
  console.log(req.body);
  var newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };
})

app.listen(3000, function () {
  console.log('Server started on port 3000...');
})
