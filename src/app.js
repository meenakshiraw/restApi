const express=require("express");
const app=express();

require("./db/conn.js");
//importing the sturoute.page
const studentRoute=require("./routers/sturoute.js");

const port=process.env.PORT||5500;

app.use(express.json());
//registering the router bcz we have exported router page on sturoute.js
//thats why we will use here by variable which is used to stote the path of that module

app.use(studentRoute);

app.listen(port,()=>{

  console.log(`listning to the ${port}`);
})


