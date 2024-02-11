const projects = require("../Modal/projectModal");

exports.addProject= async(req,res)=>{

    const{title,address,description, amount,Phones}=req.body
// user id acess from jwt midlware
    const userId=req.payload
// image from multer
    const projectImage=req.file?.filename

    try{
           const addUser = await projects.findOne({address})
           if(addUser){
            res.status(401).json('Already exist this Property')
           }
           else{
            const exactUser = new projects({
                title,address,description,amount,Phones,projectImage,userId
            })
            //sav in mongodb
            await exactUser.save()
            res.status(200).json(exactUser)
    }
}
    catch(err){
        res.status(401).json(`Add project Api failed${err}`) 
    }
}

exports.getUserpropertry= async (req,res)=>{
    
    const{id}=req.params
   
try{

    const projectsArray = await projects .find({userId:id})
    if(projectsArray){
        res.status(200).json(projectsArray)
    }
else{
    res.status(401).json('No project upload Yet')
}

}
catch(err){
    res.status(401).json(`Get user project Api failed${err}`)  
}

}

exports.getAllpropertry=async (req,res)=>{

    const searchquery=req.query.search

    const query={title:{$regex:searchquery, $options:'i'}} //i is used for case insetive seacrhing
   
try{
    


    const allProj= await projects.find(query)
    if(allProj){
        res.status(200).json(allProj)
    }
else{
    res.status(401).json('No project to upload Yet')
}

}
catch(err){
    res.status(401).json(`all user project Api failed${err}`)  
}

}


exports.getThreepropertry=async (req,res)=>{


   
    try{
    
        const allThProject= await projects.find().limit(3)
        if(allThProject){
            res.status(200).json(allThProject)
        }
    else{
        res.status(401).json('No project to upload Yet')
    }
    
    }
    catch(err){
        res.status(401).json(`all user project Api failed${err}`)  
    }
    
    }

    exports.editProject = async (req,res)=>{
        
        const{_id}=req.params
        const{title,address,description, amount,Phones,projectImage}=req.body
        const UploadImag =req.file? req.file.filename: projectImage

        try{
            const EditProject =await projects.findByIdAndUpdate({_id} ,{title,address,description, amount,Phones,projectImage:UploadImag},
        {new:true}    )

        // save in mogodb
        await EditProject.save() 
        res.status(200).json(EditProject)

        }
        catch(err){
            res.status(401).json(` user edit project Api failed${err}`) 
        }
    }

    exports.deleteProj =async (req,res)=>{
 const{_id}=req.params

        try{

            const deleteP = await projects.deleteOne({_id})
            if(deleteP){    
                res.status(200).json("project Delete")
                         }
          

        }
        catch(err){
            res.status(401).json(` user delete project Api failed${err}`) 
        }
    }

    exports.getperview = async (req,res)=>{
        const{_id}=req.params

 try{
      const userper= await projects.findOne({_id})
      if(userper){
        res.status(200).json(userper)
      }
 }
 catch(err){
    res.status(401).json(` user single view Api failed${err}`) 
 }

    }