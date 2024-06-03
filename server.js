require("dotenv").config();
const express = require(`express`);
const sequelize = require("./config/connection");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const { engine } = require("express-handlebars");
const routes = require(`./controllers`);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(routes);
app.use(
  session({
    secret: "supersecret", //fix later for .env
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.clear();
    console.log(`Listening on port: ${PORT}`);
  });
});
