const router = require("express").Router();

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    req.session.loggedIn = false;
  }
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

//login page
router.get("/login", async (req, res) => {
  res.render("sign-in");
});

//dashboard page

//create post page

module.exports = router;
