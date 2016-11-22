const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/index.html'));

app.listen(process.env.PORT || 8080);
