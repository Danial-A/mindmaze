import React, {useState} from 'react'
import Question from '../question/question';
import axios from 'axios'


function QuestionDisplay() {
    
    const [questions, setQuestions] = useState([])
    const response = axios.get('http://localhost:4000/questions/')
    setQuestions(response.data);
    return (
        <div className = "display-section">
            <Question questions = {questions}/>
        </div>
    )
}

export default QuestionDisplay
