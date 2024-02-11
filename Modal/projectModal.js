 const mongoose=require('mongoose')

 const projectSchema = new mongoose.Schema({

    title :
   
    {
      type:String,
      required :true
   },
   
   address:
   
    {
      type:String,
      required :true
   },
   
   description :
   
    {
      type:String,
      required :true
   },
     
   amount :
   {
     type:Number,
     required :true
  },
  
  Phones :
   
  {
    type:String
    
 },
 
 projectImage :
   
 {
   type:String
   
},

userId :
   
{
  type:String
  
},

 })
 const projects = mongoose.model('projects',projectSchema)
 
 module.exports=projects