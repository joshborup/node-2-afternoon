const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const pc = require('./products_controller');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3000;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(() => console.log('uh-oh there was an error'))

app.get('/api/products', pc.getALL);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id', pc.update);
app.post('/api/product', pc.create);
app.delete('/api/product/:id', pc.delete);


app.listen(port, ()=> console.log(`listening on port ${port}`))