const projects = require('../Modal/projectModal')
const users=require('../Modal/usermodal')


const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{

const{username,email,password}=req.body


try{

    const existUser= await users.findOne({email})
    if(existUser){
        res.status(401).json("user Already Exists !please Login ")
    }
    else
    {
        const newUser= new users({

            username,email,password
        }) 
        await newUser.save()
        res.status(200).json(newUser)

    }

}
catch(err){
    
    res.status(401).json(`REgister Api failed${err}`)
}
}

exports.login=async(req,res)=>{

    const{email,password}=req.body

    try{
          const existingUser= await users.findOne({email,password})
          if(existingUser){

//  token genertion
const token=jwt.sign({_id:existingUser},process.env.Jwt_Secret_key)

            res.status(200).json({
                user:existingUser,token

            })
          }
          else{
               res.status(401).json('incorrect email and password')
          }
    }
   catch(err){
    res.status(401).json(`Login Api failed${err}`)
   }
}

exports.updateProfile= async (req,res)=>{
const{username,photo,phone}=req.body
const { _id } = req.params

    const photo1=req.file? req.file.filename :photo

    console.log(username);
    console.log(_id)
    console.log(photo1);

try{
    console.log(req.params._id);
    const existUser = await users.findOne({ _id })
    if(existUser){
        existUser.username=username
    existUser.phone=phone
    existUser.photo=photo1
// save in mongodb
 await existUser.save()

res.status(200).json(existUser)
    }
    else{
        res.status(401).json('Cannot ptocedd')
    }
}

catch(err){
    res.status(401).json(`Update profile Api failed${err}`) 
}

 
}

