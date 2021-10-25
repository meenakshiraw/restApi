
const express=require("express");
// ../ path is fo r exiting that folder and can go to another folder file
const stuinfo=require("../models/students.js");
const router=new express.Router();
  
module.exports=router;
router.get("/",(req,res)=>{
    res.send("welcome to home page");
  })

router.post("/student",(req,res)=>{
    const user=new stuinfo(req.body);
    //printing on terminal postman create document
    console.log(req.body);
    user.save().then((r)=>{
     
      res.status(201).send(user);
     
    }).catch((err)=>{
      
      res.status(404).send(err);
    })
    
   })
   
   router.get("/student",async(req,res)=>{
       try{
         
         const readdata=await stuinfo.find();
         res.status(201).send(readdata);
     
       }catch(e){
         res.status(404).send(e);
       }
     
     })
     router.get("/student/:id",async(req,res)=>{
       try{
         const _id=req.params.id;
         const singledata=await stuinfo.findById(_id);
         if(!singledata){
           return res.status(402).send("data is ot found");
         }
         else{
           res.status(201).send(singledata);
         }
   
        
     
       }catch(e){
         res.status(404).send(e);
       }
     
     })
   
     router.patch("/student/:phoneNo",async(req,res)=>{
     try{
       const _id=req.params.phoneNo;
       console.log(_id);
    
       const updatestud=await stuinfo.findByIdAndUpdate(_id,req.body,{
         new:true
       });
       res.status(201).send(updatestud);
   
     }catch(e){
       res.status(404).send(e);
     }
   
   })
   router.delete("/student/:id",async(req,res)=>{
     try{
       const _id=req.params.id;
       const deleteStud=await stuinfo.findByIdAndDelete(_id);
      
       if(!req.params.id){
       
         return res.status(404).send();
       }
       
         res.status(201).send(deleteStud);
       }catch(e){
       res.status(500).send(e);
     }
   })

console.log("use page0");