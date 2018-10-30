import React, { Component } from 'react'

class CompanyDetail extends Component {

  historyBack = () => {
    this.props.history.goBack();
    // console.log(this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Company Detail</h1>
        <button onClick={this.historyBack}>back</button>
      </div>
    )
  }
}


export default CompanyDetail;