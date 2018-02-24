const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bill:/eR_NM{;@ds247058.mlab.com:47058/ips');

module.exports = { mongoose };
