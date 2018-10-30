import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Companies = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
            <Route path={`${match.url}/list`} component={asyncComponent(() => import('./routes/CompanyList'))} />
            <Route path={`${match.url}/detail`} component={asyncComponent(() => import('./routes/CompanyDetail'))} />
            {/* <Route path={`${match.url}/detail`} component={asyncComponent(() => import('./routes/ProfileDetailsPage'))}/> */}
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default Companies;
