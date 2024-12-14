import { Schema,model } from "mongoose";


const mssgchema=new Schema({
    message:String,
    sender:String

})

const mssgmodel=model("mssgmodel",mssgchema)

export default mssgmodel