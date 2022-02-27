const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ArquivosGed-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});