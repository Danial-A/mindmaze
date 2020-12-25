const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());

const uri = "mongodb+srv://haider_406:haider_406@cluster0.mfa1q.mongodb.net/mindmaze?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection

connection.once('open', ()=>{
    console.log("Database connection successful");
})

const questionRouter = require('./routes/question')
app.use('/questions',questionRouter)

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})