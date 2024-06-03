require("dotenv").config();
const express = require(`express`);
const sequelize = require("./config/connection");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const { engine } = require("express-handlebars");
const routes = require(`./controllers`);
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(
  session({
    secret: "supersecret", //fix later for .env
    resave: false,
    saveUninitialized: true,
    cookie: {},
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.json());
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.clear();
    console.log(`Listening on port: ${PORT}`);
  });
});
