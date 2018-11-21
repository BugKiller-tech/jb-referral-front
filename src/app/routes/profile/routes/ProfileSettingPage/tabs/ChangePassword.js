import React, { Component } from 'react';
import { TextField, Button, LinearProgress } from '@material-ui/core';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import Api from '../../../../../../api';
class ChangePassword extends Component {

  state = {
    newPwd: '',
    rePwd: '',

    loading: false,
  }

  validateInput = () => {
    if (this.state.newPwd == '') {
      NotificationManager.error('Please input the new password');
      return false;
    }
    if (this.state.rePwd == '') {
      NotificationManager.error('Please input the confirmation password');
      return false;
    }
    if ( this.state.newPwd !== this.state.rePwd) {
      NotificationManager.error('The new password and confirmation password is mismatched!');
      return false;
    }

    return true;
  }

  changePassword = () => {
    console.log('trying to change the password')
    if (!this.validateInput()) return;

    this.setState({ loading: true });

    Api.changePassword({ newPwd: this.state.newPwd })
    .then(res => {
      this.setState({ loading: false })
      NotificationManager.success('Successfully changed the password')
    })
    .catch(err => {
      this.setState({ loading: false })
      NotificationManager.error(err.response.data.errors);
      // console.log('error during change the password', err.response.data);
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <TextField 
              type="password"
              label="New Password"
              fullWidth
              defaultValue={this.state.newPwd}
              onChange={(e) => { this.setState({ newPwd: e.target.value }) }}
            />
            <TextField 
              type="password"
              label="Confirm Password"
              fullWidth
              defaultValue={this.state.rePwd}
              onChange={(e) => { this.setState({ rePwd: e.target.value }) }}
            />
            <Button variant="raised" color="primary"
              style={ { marginTop: '20px' }}
              onClick={this.changePassword}
            >
              Change password
            </Button>
            { this.state.loading && <LinearProgress /> }
          </div>
        </div>
      </div>
    )
  }
}

export default ChangePassword