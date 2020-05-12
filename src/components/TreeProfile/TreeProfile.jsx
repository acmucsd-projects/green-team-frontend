import React from 'react';
import PropTypes from 'prop-types';
import './TreeProfile.css'

function TreeProfile(props) {
    return (
        <div className="profile-wrapper">
            <div className="left">
                <h1>{props.treeName}</h1>
                {/* Description and points */}
                <p>{props.treeDescription}</p>
                <div className="points">
                    Points in {(new Date().getFullYear())}: {props.points}
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
    treePhoto: PropTypes.string,
}

export default TreeProfile;