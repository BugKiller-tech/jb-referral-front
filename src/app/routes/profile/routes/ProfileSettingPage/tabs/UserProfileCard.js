import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const UserProfileCard = ({headerStyle, user}) => {
    return (
        <div className="jr-card text-center">
            <div className={`jr-card-header-color ${headerStyle}`}>
                <div className="jr-card-header-top">
                &nbsp;
                    {/* <IconButton className="jr-menu-icon mr-auto" aria-label="Menu">
                        <span className="menu-icon bg-white"/>
                    </IconButton>
                    <IconButton><i className="zmdi zmdi-more-vert text-white"/></IconButton> */}
                </div>

                <img className="rounded-circle size-100 avatar-shadow mb-3"
                     src="http://via.placeholder.com/150x150" alt="Team Member"/>

                <div className="jr-card-hd-content text-white">
                    <h4 className="mb-0">{ user.firstName } { user.lastName }</h4>
                    <p className="mb-0">{ user.email }</p>
                </div>
            </div>
            <div className="jr-card-body">
                {/* <p>This is what I'm working on</p> */}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.authUser
    }
}

export default connect(
    mapStateToProps,
)(UserProfileCard);

