const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const db = require('../db/models/sync');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api/', routes);

app.listen(PORT, function(){
    console.log('server now is listening on PORT 3000')
})