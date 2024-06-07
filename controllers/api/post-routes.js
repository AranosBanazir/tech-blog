const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const auth = require("../../utils/middleware/auth");
// route from: /api/posts

router.get("/", async (req, res) => {
  //TODO: Query all posts
  const rawPosts = await Post.findAll({
    attributes: ["title", "body", ["id", "postID"]],
    include: [
      { model: User, attributes: ["username"] },
      {
        model: Comment,
        attributes: ["body"],
        include: [{ model: User, attributes: ["username"] }],
      },
    ],
  });

  const posts = rawPosts.map((post) => post.get({ plain: true }));

  res.send(posts);
});

router.get("/:id", auth, async (req, res) => {
  let post = await Post.findByPk(req.params.id, {
    include: [
      { model: User, attributes: ["username"] },
      { model: Comment, include: [{ model: User, attributes: ["username"] }] },
    ],
  });

  post = post.get({ plain: true });

  console.log(post);
  res.render("single-post", {
    loggedIn: req.session.loggedIn,
    post,
  });
});

module.exports = router;
