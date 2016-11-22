const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/src')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'src/static/index.html'));
});


app.listen(process.env.PORT || 8080);
