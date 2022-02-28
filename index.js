const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require ('./src/services/databases');

//middlewares
app.use(bodyParser.json());
app.use(express.json());

app.use('/img', require('./routes/img-routes'));

app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});