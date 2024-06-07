const router = require("express").Router();
const { raw } = require("express");
const { Post, User, Comment } = require("../../models");

// route from: /api/posts

router.get("/", async (req, res) => {
  //TODO: Query all posts
  const rawPosts = await Post.findAll({
    attributes: ["title", "body", ["id", "postID"]],
    include: [
      { model: User, attributes: ["firstName", "lastName"] },
      {
        model: Comment,
        attributes: ["body"],
        include: [{ model: User, attributes: ["firstName", "lastName"] }],
      },
    ],
  });

  const posts = rawPosts.map((post) => post.get({ plain: true }));
  console.log(posts);
  // res.render("home", {});5
    res.send(posts);
});

module.exports = router;
