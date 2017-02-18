var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/mine.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mine.png'));
});

app.get('/ui/296406_Abhimanyu_2.pdf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '296406_Abhimanyu_2.pdf'));
});

app.get('/ui/mypage_one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mypage_one.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
