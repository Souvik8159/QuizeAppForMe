const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connected');
        return conn;
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;