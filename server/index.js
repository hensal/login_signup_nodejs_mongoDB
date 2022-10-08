const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
var cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());     //use core at the start of the middleware
app.use(express.json());
app.use(authRouter);

const DB = "mongodb+srv://hensal:hensal12345@cluster0.w7ak7d6.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(()=> {
    console.log("Connection Successful");
  })
   .catch((e) => {
    console.log(e);
   });

app.listen(PORT, "0.0.0.0", () => {
  console.log('connected at port ${PORT}');
});
