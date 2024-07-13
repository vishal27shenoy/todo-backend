const mongoose = require('mongoose');
const dbURI = process.env.DATABASE_URI

const connection = async () => {
    try{
        await mongoose.connect(dbURI);
        console.log("Connected");
    }catch(err){
        console.log("Error in connection",err);
    }
}
module.exports = {connection}