const express = require("express");
const mongoose = require('mongoose');

//connect to db

mongoose.connect('mongodb://127.0.0.1:27017/passport',()=>{
    console.log("DB CONNECTED")
});

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
  res.render("home");
})

app.listen(4000, () => {
  console.log(`Server is running at port 4000..`);
});
