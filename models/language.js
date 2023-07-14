const Mongoose = require ('mongoose')
const {Schema} = Mongoose


const languageSchema = new Schema({
    name: {type:String, require:true},
    greeting:String,
    pangram:String,
    filler:String
})

const Language = Mongoose.model('Language', languageSchema)
module.exports = Language