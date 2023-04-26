const getAllNotLoggedPostsQuery = require('./getAllNotLoggedPostsQuery');
const getAllPostsQuery = require('./getAllPostsQuery');
const addPostQuery = require('./addPostQuery');
const getPostByIdQuery = require('./getPostByIdQuery');
const updatePostVoteCountQuery = require('./updatePostVoteCountQuery');
const getProfilePostsQuery = require('./getProfilePostsQuery');

module.exports = {
  getAllNotLoggedPostsQuery,
  getAllPostsQuery,
  addPostQuery,
  getPostByIdQuery,
  updatePostVoteCountQuery,
  getProfilePostsQuery
};
