import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';

const UserProfileCard = ({headerStyle}) => {
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
                    <h4 className="mb-0">John Doe</h4>
                    <p className="mb-0">john@gmail.com</p>
                </div>
            </div>
            <div className="jr-card-body">
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nihil, reprehenderit incidunt debitis animi architecto! Quam aspernatur libero magni minima expedita? Deserunt error unde consequatur voluptatibus porro et cumque architecto? Nam ea voluptatem voluptatum repellendus numquam nulla ratione impedit odit, consequatur soluta nesciunt itaque, inventore quaerat explicabo distinctio laboriosam? Voluptatem!</p>
            </div>
        </div>
    )
};

export default UserProfileCard;

