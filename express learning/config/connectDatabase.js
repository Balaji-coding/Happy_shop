const mongoose =require('mongoose')
const connectDatabase =async ()=>{
    await mongoose.connect(process.env.DB_Url).then((con)=>{
        console.log("mongoose connected",+con.connection.host)
    })
}
module.exports =connectDatabase;