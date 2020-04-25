import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./blog.scss";

const User = ({ users }) => {
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <Card.Body className="postCover">
            <Card.Title className="text-center p-5">{users.user_name}</Card.Title>
            <Card.Title className="text-center p-5">{users.email}</Card.Title>
            <Card.Title className="text-center p-5">{users.password}</Card.Title>
         </Card.Body>
         <Card.Footer>
         </Card.Footer>
      </Card>
   );
};

User.propTypes = {
   user: PropTypes.object.isRequired
};

export default User;
