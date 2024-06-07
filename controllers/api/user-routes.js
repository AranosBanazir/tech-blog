const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// route from: /api/user/

router.get("/", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.status(400).json({ message: "Invalid Username" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Invalid Password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      console.log(req.session, "before");
      req.session.loggedIn = true;
      console.log(req.session, "after");
      console.log("setting TRUE here too");
    });
    res.status(200).json({
      message: "You have been logged in successfully",
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/logout", async (req, res) => {
  try {
    req.sessionStore.destroy(req.sessionID, (err) => {
      err ? console.log(err) : console.log("session destroyed");
    });
    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (userData) {
      res.status(400).json({ message: "User already exists." });
      return;
    }

    const user = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.loggedIn = true;
      console.log("setting TRUE here");
      res.status(201).json({
        message: "You have been signed up successfully",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
