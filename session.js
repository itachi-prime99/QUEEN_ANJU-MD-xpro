const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~jV8nDT7b#sThumM7P5-QAp5RZ3gPcGA9wHtZu_zjYm9pmZ0-lK08",
};
