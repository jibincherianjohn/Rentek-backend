const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL).then(()=>{

 console.log("__MongpDb AtLast Connected");
}).catch((err)=>{
    console.log( "Mongo Db Atlast failed"+(err));
})