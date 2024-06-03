const router = require("express").Router();
const apiRoutes = require("./api");
const login = require("./login");

router.use("/login", login);
router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  if (!req.session.loggedIn){
    req.session.loggedIn = false
  }
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
