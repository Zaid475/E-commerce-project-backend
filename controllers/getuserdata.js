// import Usermodel from "../schema/schema.js"
// import jwt from "jsonwebtoken"

// export const Getuserdata=async (req,res)=>{
//     console.log(req.cookies)
//     const token=req.cookies.Token
//     if(!token){
//         return res.json({
//             message:"no data present",
//             success:false
//         })
//     }
//     console.log(token)
//     const userdata=jwt.verify(token,process.env.ENCRYPTIONSECRET)
//     console.log(userdata)

//     const user=await Usermodel.findById(userdata.UserId)
//     console.log(user,"user")

//     if(!user){
//         return res.json({
//             message:"no user found",
//             success:false
//         })
//     }

//     return res.json({
//         success:true,
//         message:"userdata fetched successfully",
//         Userdata:{
//             name:user.name,
//             email:user.email


//         }
        

//     })

// }