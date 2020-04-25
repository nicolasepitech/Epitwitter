import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import {
   EmailShareButton,
   FacebookShareButton,
   FacebookIcon,
   InstapaperShareButton,
   RedditShareButton,
   TwitterShareButton,
 } from "react-share";

const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Container className="mt-4 viewPost">
          <FacebookShareButton
            url="www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog/post/"
            title={post.title}
            quote={post.title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
         
         <Row>
            <Col className="text-center postTitle">
               <h2>{post.title}</h2>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
            <Col>{post.body}</Col>
         </Row>
         <Row className="d-flex flex-column font-italic footerStyle">
            <Col>Created by : {post.author}</Col>
            <Col>Date: {postDate}</Col>
         </Row>
         {auth && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button variant="outline-danger" onClick={onDelete}>
                     Delete
                  </Button>
               </Col>
            </Row>
         )}
      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
