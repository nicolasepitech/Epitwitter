import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Users from "../components/user/Users";
import { getPosts, getPostsByAuthor } from "../actions/postActions";
import { fetchUsers } from '../actions/users';
import { getUsers } from '../actions/userActions';

const UsersPage = ({
   isAuthenticated,
   getUsers,
   fetchUsers,
   match,
   posts,
   users
}) => {
   useEffect(() => {
      isAuthenticated ? getPosts() : getUsers();
   }, [isAuthenticated, getPosts, getPostsByAuthor, match]);

   return <Users posts={posts} auth={isAuthenticated} />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   posts: state.post.posts
});

UsersPage.propTypes = {
   posts: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getPosts: PropTypes.func.isRequired,
   getPostsByAuthor: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostsByAuthor, getPosts }
)(UsersPage);
