const router = require("express").Router();
const auth = require("../utils/middleware/auth");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    req.session.loggedIn = false;
  }
  console.log(req.session);
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

//login page
router.get("/login", auth, async (req, res) => {
  res.render("sign-in");
});

//dashboard page

//create post page

module.exports = router;
