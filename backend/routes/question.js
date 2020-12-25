const router = require('express').Router();
let questions = require('../models/question.module');

router.route('/').get((req,res)=>{
    questions.find()
    .then((question)=> res.json(question))
    .catch(err => res.json(err));
})

router.route('/add').post((req,res)=>{
    const question = req.body.question
    const difficulty = req.body.difficulty
    const answers = req.body.answers
    const choices = [{choice: "Option A"}]

    const newQuestion = new questions({
        question,
        difficulty,
        answers,
        choices
    })
    newQuestion.save()
    .then(()=> res.json("Question Added"))
    .catch(err => res.json("Errors: "+err))
})

router.route('/delete/:id').delete((req,res)=>{
    questions.findByIdAndDelete(req.params.id)
    .then(res => res.json("Question Deleted"))
    .catch(err => res.json("error: "+err))
})
module.exports = router