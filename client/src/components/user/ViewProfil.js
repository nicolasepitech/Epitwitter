import React from 'react';
import PropTypes from 'prop-types';
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./blog.scss";
import * as types from '../../actions/types';

class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: types.PROFILE_REQUESTED,
      payload: {
        userId: this.props.pageState.auth.id
      }
    });
  }}

const ViewProfil = (props) => {
  return (
    <div>
      <h1>Profile aaaaaaaaaa {props.users}</h1>

      <ul>
        <li>Email address: {props.email}</li>
      </ul>
    </div>
  )
};



ViewProfil.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ViewProfil;