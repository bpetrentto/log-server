const mongoose = require('mongoose');

const Ips = mongoose.model('Ips', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    updatedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Ips };