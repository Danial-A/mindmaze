import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './hero.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import QuestionDisplay from '../question-display/display'

function HeroSection() {

    const initialValues = {
        question : '',
        answers: '',
        difficulty: ''
    }

    const onSubmit = (values)=>{
        console.log(values)
        axios.post('http://localhost:4000/questions/add', values)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const validationSchema = Yup.object({
        question: Yup.string().required('This field is required..'),
        answers: Yup.string().required('This field is required....')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className = "container-fluid hero-section">
            <div className="row">
                <div className="col-md-6 form-section">
                    <div className="container" style = {{paddingTop: "5vh"}}>
                        <form onSubmit = {formik.handleSubmit}>
                            <div className="row">
                                <div className="col" style = {{marginBottom: "20px"}}>
                                    <label htmlFor="question">Question: </label>
                                    <input className = "form-control" type="text" name = "question" id = "question" placeholder = "Enter the question..." 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        value = {formik.values.question}
                                    />
                                    {formik.errors.question && formik.touched.question ? <p>{formik.errors.question}</p> : null}
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col" style = {{marginBottom: "20px"}}>
                                    <label htmlFor="question">Answers: </label>
                                    <textarea className = "form-control" type="text" name = "answers" id = "answers" placeholder = "Enter the answers..." 
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                    value = {formik.values.answers}
                                    />
                                    {formik.errors.question && formik.touched.question ? <p>{formik.errors.question}</p> : null}
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="form-group">
                                        <label for="difficulty">Select list:</label>
                                        <select class="form-control" id="difficulty" name = "difficulty" id = "difficulty" value = {formik.values.difficulty} 
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}>
                                            <option>Easy</option>
                                            <option>Medium</option>
                                            <option>Hard</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn-section">
                                <button type = "submit" className = "submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 question-section">
                    <QuestionDisplay/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
