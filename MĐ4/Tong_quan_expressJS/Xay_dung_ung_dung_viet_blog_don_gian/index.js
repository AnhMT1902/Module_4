const express = require('express');
const app = express();
const arrBlog = [
    {
        title: 'aaaaa',
        content: "asdasdasdas"
    }
];

app.set('views', 'view');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => {
    res.render("view", {arrBlog: arrBlog})
});
app.get('/blog', (req, res) => {
    res.render("blog")
});
app.post('/', (req, res) => {
    let blog = {
        content: req.body.content,
        title: req.body.title
    }
    arrBlog.push(blog)
    res.redirect("/")
    console.log('success')
})

app.listen(3000, () => {
    console.log('server running')
})