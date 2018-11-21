import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

import { connect } from 'react-redux';


class ProfileDetailsPage extends Component {
  render () {
    const { user } = this.props;
    return (
      <div>
        <div className="app-wrapper">
            {/* <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/> */}
            <ContainerHeader match={this.props.match} title='Profile Details' />
            <div className="row">
              <div className="col-md-6">
aasdf
              </div>
              <div className="col-md-6">
asdf
              </div>
            </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.authUser,
  }
}

export default connect(mapStateToProps)(ProfileDetailsPage);