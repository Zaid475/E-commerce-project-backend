import Usermodel from "../schema/schema.js";
import bcrypt from "bcrypt"

export const Register=async (req,res)=>{
    const{name,email,password,confirmpassword}=req.body.state;
    console.log(name,email,password,confirmpassword);
    try{
        if (name && password && email && confirmpassword){
            if(password != confirmpassword){
                return res.json({
                    message:"pass and confirm pass not match",
                    success:false

                })
            }

            const userexists= await Usermodel.findOne({email:email})
            console.log(userexists);
            if(userexists){
                return res.json({
                    messsage:"User exists already",
                    success:false

                })
            }
            const hashpassword= await bcrypt.hash(password,10)
            console.log(hashpassword)

            const newuser=new Usermodel({
                name:name,
                email:email,
                password:hashpassword,
                confirmpassword:hashpassword
            })

            const userdata=await newuser.save()
            return res.json({
                message:"Registered successfully",
                success:true
            })
            



        }
        else{
            return res.json({
                message:"All fields are required",
                success:false
            })
        }
    }

    catch(error){
        return res.json({
            message:"error occured",
            success:false
        })
    }


    
    

}