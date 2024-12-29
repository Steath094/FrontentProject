import express, { response } from "express"
import pg  from "pg";
import dotenv from "dotenv"
import axios from "axios";
import { Image } from "canvas";
const app = express();
const PORT = 3000;
dotenv.config({
    path: './.env'
})
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.json()) // body-parser is now deprecated as of Express 4.16+
app.use(express.urlencoded({ extended: true }))

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "permalist",
    password: process.env.DBPASS,
    port: process.env.DBPORT,
  });
  try {
    db.connect();    
  } catch (error) {
    console.log(error);
  }
//routes
app.get('/',async (req, res) => {
    const result =await db.query("SELECT * FROM books");
    console.log(result.rows);
    
    const books = result.rows;
    res.render('index', {
        books: books
      });
});

app.post('/add',async (req,res)=>{
    const title = req.body.title;
    const rating = req.body.rating;
    const des = req.body.description;
    const url = `http://openlibrary.org/search.json?q=${title}`
    const response = await axios.get(url)
    const author = response.data.docs[0].author_name[0];
    let imageUrl = `https://covers.openlibrary.org/b/isbn/${response.data.docs[0].isbn[0]}`
    console.log(imageUrl);
    const img = new Image();
    img.src = imageUrl;
    img.onerror = function () {
        imageUrl = "";
    };
    try {
        await db.query("INSERT INTO books (title,author,rating,description,image_cover_link) VALUES ($1,$2,$3,$4,$5)",[title,author,rating,des,imageUrl]);
        res.redirect('/');
    } catch (error) {
        console.log("Error Occured While Inserting Data",error);   
    }
    
    
})

app.listen(PORT,(error)=>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
})