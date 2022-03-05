const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Image', new Schema(
    {
        imageLog: {
            type: mongoose.Types.ObjectId,
            ref: 'ImageLog',
            required: true
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    })
);