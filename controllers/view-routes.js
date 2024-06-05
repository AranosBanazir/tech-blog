const router = require("express").Router();

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    req.session.loggedIn = false;
  }
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
