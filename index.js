const express = require("express");
const userRouter = require('./routes/userRoutes');
const connectDB = require("./config/db");

// call mongodb function 
connectDB();

// rest object
const app = express();

// middlewares 
app.use(express.json())

// port no
const PORT = 5000;

// Route / Endpoint / rest api for user
app.use('/api/v1/user', userRouter)


app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
