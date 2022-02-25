const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/urlShortener',{
useNewURLParser: true, useUnifiedTopology:true
})
app.set('view engine','ejs')

app.listen(process.env.PORT||4000);

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/shortURLs',(req,res)=>{

})