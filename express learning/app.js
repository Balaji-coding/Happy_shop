const express = require('express');
const dotenv= require('dotenv');
const path =require('path')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const PORT = process.env.Port;
const connectDatabase =require('./config/connectDatabase')


app.get('/', (req, res) => {
  res.json({message:"hello"});
});
app.get('/first',(req, res)=>{
  res.json({body:"this is a express.js server"});
});
app.post('/post',(req, res)=>{
  const {name}=req.body;
  console.log("data is received", name);
  res.json({message :`received data is ${name}`});
});
app.get('/coe',(req,res)=>{
  console.log("print command")
  res.json({msg:"balaji welcome"})
})


const products =require('./routes/product')
const orders =require('./routes/order')
const test =require('./routes/test')
const testing= require('./routes/try')

connectDatabase()
app.use('/api/v1',products)
app.use('/api/v1',orders)
app.use('/api/v1',test)
app.use('/api/v1',testing)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ${process.env.Node_Env}`);
});
