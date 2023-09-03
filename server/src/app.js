const express =  require("express");
const http = require("http");
require("dotenv").config();
const router = require("./router/router")

const app = express();
const PORT = process.env.PORT;

const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router);

server.listen(PORT, ()=>{
    console.log(`server is running in: http://localhost:${PORT}`)
})