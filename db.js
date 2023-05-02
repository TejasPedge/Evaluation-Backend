const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.CONNECTION_URL);
module.exports = {connect};

