const router = require('express').Router();

router.post('/', (req, res) => {
    res.send('layouts/main')
})

router.get("/login", (req, res) =>{
    if(req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login")
})


module.exports = router