const express =  require("express");
const http = require("http");
const app = express();
const PORT = 3000;

const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    console.log(req.header);
    res.status(200).send("Hello this is server");
})

server.listen(PORT, ()=>{
    console.log(`server is running in: http://localhost:${PORT}`)
})