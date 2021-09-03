import express from 'express';
import cors from 'cors'
import { readdirSync } from 'fs'
import morgan from 'morgan'
import mongoose from 'mongoose'
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser')

const app = express();

//db connect

mongoose
.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true

})
.then(()=>console.log("Povezani ste na DB"))
.catch((error)=>console.log(`Desila se greska${error}`))

//midlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true,limit:5000}));

app.use(morgan("dev"));



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"../client/build")))
    app.get('*',(req,res)=>{

        res.sendFile(path.join(__dirname, "../client/build", "index.html"));

    })

}

//autoload routers


const termini = require ('./routes/termini')
const auth = require ('./routes/auth')

app.use('/api',termini)
app.use('/api',auth)

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server se startovao na portu: ${port}`)
})