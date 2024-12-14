import Usermodel from "../schema/schema.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const Login=async (req,res)=>{

    const{email,password}=req.body.state2;
    try{
    if(!email || !password){
        return res.json({
            message:"Fill all fields",
            success:false
        })
    }
    

    const exisitinguser=await Usermodel.findOne({email:email})
    console.log(exisitinguser,"Userinfo")
    if(!exisitinguser){
        return res.json({
            message:"Invalid Email",
            success:false
        })
    }
    const passwordchecking=await bcrypt.compare(password,exisitinguser.password)
    if(!passwordchecking){
        return res.json({
            message:"Invalid Password",
            success:false
        })
    }
    const tokenencrypted=jwt.sign({UserId:exisitinguser._id},process.env.ENCRYPTIONSECRET)
    console.log(tokenencrypted)

    res.cookie("Token",tokenencrypted)
    return res.json({
        message:"Logged in successfully",
        success:true,
        Userdata:{
            name:exisitinguser.name,
            email:exisitinguser.password
        }

    })


}

catch(error){
    console.log(error)
    }
}




