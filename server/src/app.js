const express =  require("express");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const router = require("./router/router");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;

app.use(cors({credentials: true, origin: ["http://localhost:5173"]}));
app.use(helmet());
app.use(morgan("short"))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(()=>{
        console.log("MongoDB is connected !");
    })
    .catch((error)=>{
        console.log("Error while connecting to MongoDB", error)
    })

app.use("/", router);

server.listen(PORT, ()=>{
    console.log(`server is running in: http://localhost:${PORT}`)
})