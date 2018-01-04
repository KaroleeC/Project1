const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api/', routes);

app.listen(3000, function(){
    console.log('server now is listening on PORT 3000')
})