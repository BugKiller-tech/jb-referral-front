import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import CardBox from 'components/CardBox';
import FullWidthTabs from './FullWidthTabs';



class ProfileSettingPage extends Component {
  render () {
    return (
      <div>
        <div className="app-wrapper">
            <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.profile.setting"/>}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                      heading={''}>
                  <FullWidthTabs/>
                </CardBox>
            </div>

        </div>        
      </div>
    )
  }
}

export default ProfileSettingPage