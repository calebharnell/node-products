const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const products = require('./routes/products')

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.use('/products', products);

app.listen(port);
