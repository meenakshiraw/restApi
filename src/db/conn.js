const mong=require("mongoose");
mong.connect("mongodb://localhost:27017/newstudent-api",{useNewUrlParser: true,
useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false}).then(()=>{console.log("its mongodb is connected")})
.catch((err)=>{console.log("error")});
