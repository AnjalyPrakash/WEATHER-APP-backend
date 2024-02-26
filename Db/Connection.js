const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then((response)=>{
    console.log("mongodb connected successfully");
}).catch((err)=>{
    console.log(`err occured due to ${err}`);
})