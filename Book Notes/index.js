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
  let sortingType = 'name';
  let query = "SELECT * FROM books";
//routes
app.get('/',async (req, res) => {
    let result =await db.query(query);
    const books = result.rows;
    const options = ['name', 'time', 'rating'];
    res.render('index', {
        books: books,
        options,
        defaultSortingType: sortingType
      });
});
app.post('/updateSorted',(req,res)=>{
    sortingType = req.body.sortingType;
    query = "SELECT * FROM books"
    if (sortingType) {
        if (sortingType === 'name') {
            query += ' ORDER BY title ASC'; // Sort by title in ascending order
          } else if (sortingType === 'time') {
            query += ' ORDER BY id DESC'; // Sort by id (time) in descending order
          } else if (sortingType === 'rating') {
            query += ' ORDER BY rating DESC'; // Sort by rating in descending order
          }
    }
    res.redirect('/');
})
app.post('/add',async (req,res)=>{
    const title = req.body.title;
    const rating = req.body.rating;
    const des = req.body.description;
    const url = `http://openlibrary.org/search.json?q=${title}`
    const response = await axios.get(url)
    const author = response.data.docs[0].author_name[0];
    let imageUrl = `https://covers.openlibrary.org/b/isbn/${response.data.docs[0].isbn[0]}`
    // console.log(imageUrl);
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

app.post('/delete',async (req,res)=>{
    const id = req.body.id;
    try {
        await db.query("DELETE FROM books WHERE id = $1",[id]);
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