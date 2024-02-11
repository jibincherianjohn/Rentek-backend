const multer=require('multer')

// storage : loaction filename  (specfic)

const  storage=multer.diskStorage({
 
    destination:(req,file,callback)=>{

        callback(null,'./uploads')
        
    },
    filename:(req,file,callback)=>{

                        // image+dateandtime +orginal name
        callback(null,`image-${Date.now}-${file.originalname}`)
    }

})



// file filter -optional -eg(jpeg,png etc..)

const fileFilter= (req,file,callback)=>{
    
    if(file.mimetype=='image/jpg'||file.mimetype=='image/jpeg' || file.mimetype=='image/png'||file.mimetype=='image/gif'|| file.mimetype=='image/HEIC' ){
        callback(null,true)
    }else{
        callback(null,false)
    }
}




//  multer middlware

const upload=multer({storage,fileFilter})
module.exports=upload