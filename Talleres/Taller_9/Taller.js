const express = require('express'),
    app = express(),
    path = require('path'),
    cookie_parser=require('cookie-parser'),
    cookie_session=require('cookie-session');

app.use(express.static(path.join(__dirname,"/public")));
app.use(cookie_parser());
app.use(cookie_session({secret:"Data"}));

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/Views/About_me.html`);
})

app.get('/acerca',(req,res)=>{
    res.sendFile(`${__dirname}/Views/About_me.html`);
})

app.get('/preparacion',(req,res)=>{
    res.sendFile(`${__dirname}/Views/Education.html`);
})

app.get('/experiencia',(req,res)=>{
    res.sendFile(`${__dirname}/Views/experience.html`);
})

app.get('/idiomas',(req,res)=>{
    res.sendFile(`${__dirname}/Views/Languages.html`);
})

app.get('/aptitudes',(req,res)=>{
    res.sendFile(`${__dirname}/Views/aptitude.html`);
})

app.listen(3000);
console.log('status: Online');