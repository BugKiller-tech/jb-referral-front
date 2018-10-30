import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';


class ProfileDetailsPage extends Component {
  render () {
    return (
      <div>
        <div className="app-wrapper">
            <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
            <div className="d-flex justify-content-center">
                <h1>Profile Details</h1>
            </div>

        </div>        
      </div>
    )
  }
}

export default ProfileDetailsPage