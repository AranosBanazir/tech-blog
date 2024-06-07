const router = require("express").Router();
const auth = require("../utils/middleware/auth");

router.get("/", async (req, res) => {
  console.log(req.session, "first entry");
  if (!req.session.loggedIn) {
    req.session.loggedIn = false;
    console.log("setting FALSE here");
  }
  console.log(req.session, "in HOME view");
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

//login page
router.get("/login", async (req, res) => {
  res.render("sign-in");
});

//dashboard page
router.get("/dashboard", (req, res) => {
  console.log(req.session, "in /dashboard");
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  });
});

//create post page

module.exports = router;
