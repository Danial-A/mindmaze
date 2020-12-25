import React from 'react'

function Question(questions) {
    return (
        questions.map(
            <div className = "question-section">
                <h5>Question: {questions.question}</h5>
                <p>Answer: {questions.answers}</p>
                <pre>{questions.difficulty}</pre>
            </div>
        )
        
    )
}

export default Question
