const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

const arrayUser = [];

app.get('/', (req, res) => {
    res.render("register");
});
app.set('view engine', 'ejs');
app.set('views', 'view');
app.post('/view/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        let user = {
            userName: req.body.username,
            password: req.body.password
        }
        console.log(user)
        arrayUser.push(user);
        res.render("success", {user: user})
    } else {
        res.render("error");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
