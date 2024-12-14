import { Schema,model } from "mongoose";


const Userschema=new Schema({
    name:String,
    email:String,
    password:String,
    confirmpassword:String

})

const Usermodel=model("Usermodel",Userschema)

export default Usermodel