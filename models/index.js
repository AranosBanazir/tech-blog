const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post);
Post.belongsTo(User);

Post.belongsToMany(User, { through: Comment });
User.belongsToMany(Post, { through: Comment });

module.exports = {
  User,
  Post,
  Comment,
};
