var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , templateRSVP = require('jade').compileFile(__dirname + '/source/templates/rsvp.jade')
  , templateDrinks = require('jade').compileFile(__dirname + '/source/templates/menu.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    console.log(req.url);
    var html = template({ title: 'Home' , path: 'index'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/rsvp', function (req, res, next) {
  try {
    var html = templateRSVP({ title: 'RSVP' , path: 'rsvp'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/menu', function (req, res, next) {
  try {
    var html = templateDrinks({ title: 'Drinks' , path: 'menu'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})