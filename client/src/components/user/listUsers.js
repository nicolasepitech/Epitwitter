import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import "./blog.scss";

const listUsers = ({ users }) => {
   return (
      <div className="grid-container mx-3">
         {users.map(user => (
            <Link to={`/blog/users/${user._id}`} key={user._id}>
               <Users user={user} />
            </Link>
         ))}
      </div>
   );
};

listUsers.propTypes = {
   posts: PropTypes.array.isRequired
};

export default listUsers;
