const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers:{
        type: String,
        required: true
    },
    choices: [
        {
            choice:{
                type: String,
                required: true
            }
        }
    ],
    difficulty: {
        type : String,
        required: true,
        maxLength: 100
    }
},
{
    timestamps: true
})

const Question = mongoose.model('question', questionSchema);
module.exports = Question;