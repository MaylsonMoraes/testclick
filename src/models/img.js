const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Img', new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    })
);