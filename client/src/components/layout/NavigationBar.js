import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ auth, onClick }) => (
   <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >
      <Link to="/blog">
         <Navbar.Brand>
            <img
               src="https://newsroom.ionis-group.com/wp-content/uploads/2019/09/CODING_ACADEMY_LOGO_BLANC.png"
               style={{ height: 30, width: 90 }}
               className="d-inline-block align-top"
               alt=""
            />
      
            {" Epitweet "}
         </Navbar.Brand>
      </Link>
     
   <Nav className="ml-auto">
         {auth ? (
            <Link to="/profil">
               <Navbar.Brand>
                  <div className="mr-sm-2">Profile</div>
               </Navbar.Brand>
          </Link>
         ): (
       
               <Navbar.Brand>
            
               </Navbar.Brand>
         )}
   </Nav>
  
   <Nav className="ml-auto">
         {auth ? (
            <Link to="/users">
               <Navbar.Brand>
                  <div className="mr-sm-2">Membres</div>
               </Navbar.Brand>
            </Link>
         ): (
            <Link to="/profile">
               <Navbar.Brand>
            
               </Navbar.Brand>
            </Link>
         )}
   </Nav>

      <Nav className="ml-auto">
         {auth ? (
            <Link to="/logout">
               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav>
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
