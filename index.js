const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require ('./src/services/databases');

//middlewares
app.use(bodyParser.json());
app.use(express.json());

app.use('/image', require('./routes/image-routes'));

app.listen(3000, () => {
    console.log('Meu servidor está funcionando');
});