const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Img', new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        endereco: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    })
);