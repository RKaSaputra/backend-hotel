import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import tamuRoute from "./routes/tamus.js"
import pegawaiRoute from "./routes/pegawais.js"
import kamarRoute from "./routes/kamars.js"
import makananRoute from "./routes/makanans.js"
import typeRoute from "./routes/types.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/tamus", tamuRoute)
app.use("/api/pegawais", pegawaiRoute)
app.use("/api/kamars", kamarRoute)
app.use("/api/makanans", makananRoute)
app.use("/api/types", typeRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8800, ()=>{
    connect()
    console.log("connected to backend.")
}) 
