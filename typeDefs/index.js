
const userSchema = require('./user')
const carScheme = require('./car')
const defaultSchema = require('./default')

module.exports = [defaultSchema, userSchema, carScheme]