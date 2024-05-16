require('dotenv').config()
const dbConfig = require("./config/db")[process.env['APP_ENV']]
const { criticalLog, warningLog, debugLog } = require('./config/logger')

criticalLog(new Error('This is a critical log message'))
warningLog(new Error('This is a warning log message'))
debugLog(new Error('This is a debug log message'))

