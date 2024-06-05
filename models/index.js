const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post);
Post.belongsTo(User);

Comment.belongsTo(Post);
Post.hasMany(Comment);

Comment.belongsTo(User);
User.hasMany(Comment);

Post.belongsToMany(User, { through: Comment });
User.belongsToMany(Post, { through: Comment });

module.exports = {
  User,
  Post,
  Comment,
};
