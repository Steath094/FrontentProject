import express from "express"
import pg  from "pg";

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.json()) // body-parser is now deprecated as of Express 4.16+
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res)=>{
    res.render("index.ejs");
});

app.listen(PORT,(error)=>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
})