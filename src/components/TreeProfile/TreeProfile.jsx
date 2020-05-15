import React from 'react';
import PropTypes from 'prop-types';
import './TreeProfile.css'

/* Show points or inactive label based on active status */
function PointSection (props){
    if(! props.isActive){
        return(
            <div id="inactive">
                Inactive
            </div>
        );
    }
    return(
        <div>
            {props.points} points
        </div>
    )
};

function TreeProfile(props) {
    return (
        <div className="profile-wrapper">
            <div className="left">
                <h1>{props.treeName}</h1>
                {/* Description and points */}
                <p>{props.treeDescription}</p>
                <div className="points">
                    <div className="points-left">
                        Points in {(new Date().getFullYear())}: 
                    </div>
                    <span>&nbsp;</span>
                    <PointSection isActive={props.isActive} points={props.points}/>
                </div>
            </div>
            {/* Tree photo */}
            <div className="right">
                <img className="treePhoto" src={props.treePhoto} alt="treePhoto" />
            </div>
        </div>
    )
};

TreeProfile.propTypes = {
    treeName: PropTypes.string.isRequired,
    treeDescription: PropTypes.string,
    points: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    treePhoto: PropTypes.string,
}

export default TreeProfile;