var path = require('path')
var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser())

var authenticate = (req, res, next) => {
  if (req.cookies.token) {
    next()
  } else {
    res.sendFile(path.join(__dirname, '../html', '/login.html'))
  }
}

app.get('/', authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, '../html', '/index.html'))
})
app.get('/tags/:tag', authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, '../html/tags.html'))
})
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../style.css'))
})
app.get('/assets/js/:file', (req, res) => {
  res
    .type('.js')
    .sendFile(path.join(__dirname, '../assets', 'js', req.params.file))
})
app.get('/fonts/element-icons.woff', (req, res) => {
  res.sendFile(path.join(__dirname, '../fonts', 'element-icons.woff'))
})

app.listen(3000);
