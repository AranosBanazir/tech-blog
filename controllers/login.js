const router = require("express").Router();

//routes for /login

//direct to login page
router.get("/", async (req, res) => {
  res.render("sign-in");
});



module.exports = router;
