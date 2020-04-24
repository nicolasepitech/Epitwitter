import React from 'react';
import PropTypes from 'prop-types';

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

const Profil = (props) => {
  return (
    <div>
      <h1>Profile for {props.username}</h1>

      <ul>
        <li>Email address: {props.emailAddress}</li>
      </ul>
    </div>
  )
};



Profil.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profil;