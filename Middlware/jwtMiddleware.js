
const jwt= require('jsonwebtoken')  

exports.jwtMiddleware =(req,res,next)=>{
    // console.log("inside middlware");
//  console.log(req.headers['access_token']);
 
    //acessing token
    
    const token =req.headers['access_token'].split(" ")[1] //split used to get token because token has a bearer string infront to seperate that string we use split there by we get two array then by using the index [1] we get token
    console.log(token);
    try{

   const JWTresponse = jwt.verify(token,process.env.Jwt_Secret_key)
//    console.log(JWTresponse);
   req.payload = JWTresponse._id
   next()

    }
    catch(err){
        res.status(401).json(`Middlwrae failed ${err}`)
    }


}