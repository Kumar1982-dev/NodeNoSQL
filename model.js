var mongoose=require("mongoose")
var schema=mongoose.Schema
var userschema=schema({
    name:{
        firstname:{type:String,required:true},
        lastname:String

    },
    age:Number


})
var User=mongoose.model('user1',userschema)

module.exports=User                                    


