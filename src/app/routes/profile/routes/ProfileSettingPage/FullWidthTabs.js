import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';


import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import ChangePassword from './tabs/ChangePassword';
import UserProfileCard from './tabs/UserProfileCard';
import SwitchAccount  from './tabs/SwitchAccount';

function TabContainer({children, dir}) {
    return (
        <div dir={dir} style={{padding: 8 * 3}}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};






const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

class FullWidthTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {theme} = this.props;

        return (
            <div className="w-100">
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        scrollable
                        scrollButtons="on"
                    >
                        <Tab className="tab" label="Profile View" />
                        <Tab className="tab" label="Change Password" />
                        <Tab className="tab" label="Switch Account" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <div className="row">
                            <div className="col-md-12">
                                <UserProfileCard  headerStyle="bg-primary" />
                            </div>
                            {/* <div className="col-md-6 text-center">
                                <div>
                                    <Button
                                        className="jr-btn"
                                        color="secondary">
                                        <i className="zmdi zmdi-github zmdi-hc-lg mr-1"/>
                                        Sign out
                                    </Button>

                                </div>                                
                            </div> */}
                        </div>
                        
                    </TabContainer>
                    <TabContainer dir={theme.direction}><ChangePassword /></TabContainer>
                    <TabContainer dir={theme.direction}><SwitchAccount /></TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(FullWidthTabs);
