
const Data = require('../models/data');

function readData   ()  {
    const data = Data.find();
    return data;

}

module.exports = {readData}