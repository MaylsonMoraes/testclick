const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('ImageLog', new Schema(
    {
        register:{
            type: Number
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image',
            title: String,
            address: String,
            //required: true
        },
    },
    {
        timestamps: true
    })
);