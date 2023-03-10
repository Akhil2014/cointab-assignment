const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    gender:String,
    picture: {
        large: String,
        medium:String,
        thumbnail: String
      },
      email:String,
      location:{
        city:String,
        state:String,
        country:String
      },
      dob:{date:String,age:Number},
      registered:{date:String,age:Number},
      nat:String
      
})

const usermodel=mongoose.model("user",userschema)

module.exports={usermodel}