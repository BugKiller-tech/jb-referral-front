import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Profile = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/profileSetting`}/>
            <Route path={`${match.url}/profileSetting`} component={asyncComponent(() => import('./routes/ProfileSettingPage'))}/>
            <Route path={`${match.url}/profileDetails`} component={asyncComponent(() => import('./routes/ProfileDetailsPage'))}/>
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default Profile;
