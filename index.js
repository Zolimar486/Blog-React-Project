const express = require("express");
const cors= require("cors")

const app= express();
app.use(cors());
app.options('*', cors());

const mongoose = require('mongoose');

const dotenv= require('dotenv');
const multer = require('multer');
const path= require('path');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


const authRoute = require('./routes/auth');
const userRoute= require('../api/routes/user')
const postRouter= require('../api/routes/post');
const categoryRoute= require('../api/routes/categories');

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=> console.log('I finally made it up thank God, connecting my cruster with Node'))
.catch((err)=> console.log(err));

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null, req.body.name);



    },
});

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res)=> {
    res.status(200).json('The file has been uploaded ')
})



const PORT=5000;


app.use("/api/auth", authRoute);
app.use('/api/users', userRoute)
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRoute);

app.listen(PORT, ()=> {
    console.log('Finally my Back end project ')
    console.log('A Good oportunity give by my powerful God')
} )