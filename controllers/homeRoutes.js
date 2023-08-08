const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get("/login", (req, res) =>{
    if(req.session.loggedIn) {
        res.redirect("blogsite");
        return;
    }
    res.render("login", {
        style: 'login.css'
    })
});

router.get("/aboutUs", (req, res) => {
    res.render("aboutUs")
});

router.get("/signup", (req,res) => {
    res.render("signup")
});

router.get("/blogsite", (req, res) => {
    res.render("blogsite");
});


module.exports = router