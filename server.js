const express = require('express');
const bcrypt = require('bcrypt');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers/index');
const mysql = require('mysql2');



const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 8080;
const sequelize = require('./config/connection')
const sess = {
    secret: "Super secret secret",
    cookie: {
      maxAge: 5 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};
const helpers = require('./utils/helpers')
app.use(session(sess));
const hbs = exphbs.create({helpers});
app.engine('handlebars', hbs.engine);
app.set ('view engine', 'handlebars');
const path = require('path');
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});
