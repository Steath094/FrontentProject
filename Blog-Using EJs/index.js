import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts = [];
app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});
app.get("/create-post", (req, res) => {
    res.render("create.ejs");
});
app.post("/create-post", (req, res) => {
    let post = req.body;
    post.id = Date.now();
    posts.push(post);
    res.redirect("/");
});
app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Extract ID from URL
    const post = posts.find(p => p.id === postId); // Find the post in the database
    
    if (post) {
        res.render('singlePost', { post }); // Render a detailed view of the post
    } else {
        res.status(404).send('Post not found'); // Handle invalid IDs
    }
});
app.post('/delete/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Extract ID from URL
    const index = posts.findIndex(p => p.id === postId); // Find the post in the database
    console.log(index);
    
    if (index!== -1) {
        posts.splice(index, 1); // Delete the post from the database
        console.log("worked");
    }else {
        res.status(404).send('Post not found');
    }
    
    res.redirect('/'); // Redirect back to the home page
})
app.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        res.render('editPost', { post }); // Render editPost.ejs (create this form)
    } else {
        res.status(404).send('Post not found');
    }
});
app.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === postId);
    posts[index].title = req.body.title;
    posts[index].category = req.body.category;
    posts[index].description = req.body.description;
    res.redirect('/');
})
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})