import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userSignUp,
} from 'actions/Auth';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userType: 0, // 0 is job-seeker
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this.props.hideMessage();
            }, 3000);
        }
        if (this.props.authUser !== null) {
            this.props.history.push('/');
        }
    }

    registerUser = () => {
        if (this.state.firstName == '') {
            NotificationManager.info('Please input the first name');
            return;
        }
        if (this.state.lastName == '') {
            NotificationManager.info('Please input the last name');
            return;
        }
        if (this.state.email == '') {
            NotificationManager.info('Please input the email');
            return;
        }
        if (this.state.password == '') {
            NotificationManager.info('Please input the password');
            return;
        }
        this.props.showAuthLoader();
        this.props.userSignUp(this.state);
    }

    render() {
        const { firstName, lastName, email, password, userType } = this.state;
        const {showMessage, loader, alertMessage} = this.props;
        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">
                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Jambo">
                            <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo"/>
                        </Link>
                    </div>
                    <div className="app-login-content">
                        <div className="app-login-header">
                            <h1>Sign Up</h1>
                        </div>

                        <div className="mb-4">
                            <h2><IntlMessages id="appModule.createAccount"/></h2>
                        </div>

                        <div className="app-login-form">
                            <form method="post" action="/">
                                <TextField
                                    type="text"
                                    label="First Name"
                                    onChange={(event) => this.setState({firstName: event.target.value})}
                                    fullWidth
                                    defaultValue={firstName}
                                    margin="normal"
                                    className="mt-0 mb-2"
                                />
                                <TextField
                                    type="text"
                                    label="Last Name"
                                    onChange={(event) => this.setState({lastName: event.target.value})}
                                    fullWidth
                                    defaultValue={lastName}
                                    margin="normal"
                                    className="mt-0 mb-2"
                                />

                                <TextField
                                    type="email"
                                    onChange={(event) => this.setState({email: event.target.value})}
                                    label={<IntlMessages id="appModule.email"/>}
                                    fullWidth
                                    defaultValue={email}
                                    margin="normal"
                                    className="mt-0 mb-2"
                                />

                                <TextField
                                    type="password"
                                    onChange={(event) => this.setState({password: event.target.value})}
                                    label={<IntlMessages id="appModule.password"/>}
                                    fullWidth
                                    defaultValue={password}
                                    margin="normal"
                                    className="mt-0 mb-4"
                                />

                                <RadioGroup
                                    aria-label="User Type"
                                    name="userType"
                                    value={userType}
                                    onChange={(e) => { console.log(e.target.value); this.setState({ userType: Number(e.target.value) })  }}
                                    style={{ flexDirection: 'row' }}>
                                    <FormControlLabel value={0} control={<Radio color="primary" /> } label="Job Seeker" />
                                    <FormControlLabel value={1} control={<Radio color="primary" /> } label="Employee" />
                                </RadioGroup>

                                <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <Button variant="raised" onClick={this.registerUser} color="primary">
                                        <IntlMessages
                                            id="appModule.regsiter"/>
                                    </Button>
                                    <Link to="/signin">
                                        <IntlMessages id="signUp.alreadyMember"/>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress/>
                    </div>
                }
                {showMessage && NotificationManager.error(alertMessage)}
                <NotificationContainer/>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
    userSignUp,
    hideMessage,
    showAuthLoader,
})(SignUp);
