import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
import IntlMessages from 'util/IntlMessages';


class CompanyItem extends React.Component {



    displayDetail = () => {
        console.log(this.props.history);
        this.props.history.push('/app/companies/detail')
    }

    render () {
        const { product } = this.props;
        const {thumb, name, sizeOfCompany, mrp, offer, type, rating, description} = product;
        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                <div className="card product-item">
                    <div className="card-header border-0 p-0">
                        <div className="card-image">
                            <div className="grid-thumb-equal">
                                <a className="grid-thumb-cover" href="javascript:void(0)">
                                    <img alt="Remy Sharp" src={thumb}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="product-details">
                            <h3 className="card-title fw-regular">{name}
                                <small className="text-grey text-darken-2">{", " + type}</small>
                            </h3>
                            <div className="d-flex ">
                                <h3 className="card-title">Size: {sizeOfCompany} </h3>
                            </div>
                            <div className="d-flex flex-row">
                                <StarRatingComponent
                                    name=""
                                    value={rating}
                                    starCount={5}
                                    editing={false}/>
                                <strong className="d-inline-block ml-2">{rating}</strong>
                            </div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <Button color="primary" variant="raised" className="jr-btn jr-btn-sm " onClick={this.displayDetail} >
                                <i className="zmdi zmdi-view-array"/>
                                <span>View Details</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default  withRouter(CompanyItem);

