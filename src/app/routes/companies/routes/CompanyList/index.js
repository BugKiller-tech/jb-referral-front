import React from 'react';
import List from '@material-ui/core/List';
import CompanyItem from './CompanyItem';
import Api from '../../../../../api';

import data from './data';
class CompanyList extends React.Component {
  state = {
    companies: []
  };

  componentDidMount = () => {
    this.setState({ companies: data })

    Api.getCompanies()
    .then (res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="row animated slideInUpTiny animation-duration-3">
              {this.state.companies.map((companyData, index) => (
                  <CompanyItem key={index} product={companyData}/>
              ))}
      </div>
    );
  }
}

export default CompanyList;