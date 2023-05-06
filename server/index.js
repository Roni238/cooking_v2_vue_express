require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const fileUpload= require('express-fileupload');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware');



const PORT = process.env.PORT || 5000;
const app = express()
app.use(fileUpload({}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('image'))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);


if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname + '/public'))

    app.get(/.*/,(req,res)=>res.sendFile(__dirname + '/public/index.html'))
}
mongoose.set('strictQuery', false);
const start = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()