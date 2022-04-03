var mongoose=require("mongoose")
var user=require('./model.js')
mongoose.connect('mongodb://127.0.0.1:27017/',function(error){
    if (error) throw error
    console.log("succesfully connected")

    // creating a user object
    var userobject=new user({
        name:{
            firstname:'kumar',
            lastname:'subramaniam'
        },
        age:30
    })
    var userobject=new user({
        name:{
            firstname:'Dinesh',
            lastname:'Raj'
        },
        age:35
    })


    // save the doc into user table
    userobject.save(function(error){
        if (error) throw error

    })
    // finding all user in the user table
    user.find({},function(error,dbusers){
        if (error) throw error
        console.log(JSON.stringify(dbusers))
     })
})