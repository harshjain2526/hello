const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userModel = require("./models/userModel");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/api/data',async(req,res)=>{
    const data=await userModel.find();
    res.json(data);
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server is running  in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
