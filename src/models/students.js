const mong=require("mongoose");
const validator=require("validator");
const rschema=new mong.Schema({
    name:{
        type:String,
        required:true,
        //string min lenghth canbe minimum then 3
        minlength:3,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:[true,"email id is already presesnt"],
        validate(value){
            //not operator will use if this email is not valid then
            //we will throw an error
            if(!validator.isEmail(value)){
            throw new Error("INVALID EMAIL");}
        }
    },
    phoneNo:{
        type:Number,
        required:true,
        unique:true,
        //minimum length should be 10 and maximum also 10
    
},
    address:{
        type:String,
        required:true 
    }
})
//we will create collection using model
const stuinfo=new mong.model("Info",rschema);
module.exports=stuinfo;


