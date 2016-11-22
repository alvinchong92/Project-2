var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '/static')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(process.env.PORT || 8080);
