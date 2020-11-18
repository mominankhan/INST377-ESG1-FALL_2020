let mongoose = require('mongoose')

const server = 'localhost:27017'
const database = 'rest-api-workshop'
const user = 'bill'
const password = 'bill123'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

// Schema and model
let CustomerSchema = new mongoose.Schema({
    name:String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)
