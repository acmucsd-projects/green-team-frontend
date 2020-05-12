import React from 'react';
import './TreeProfile.css'

function TreeProfile(props) {
    return (
        <div className="profile-wrapper">
            <div className="left">
                <h1>{props.treeName}</h1>
                <p>{props.treeDescription}</p>
                <div className="points">
                    Points in {(new Date().getFullYear())}: {props.points}
                </div>
            </div>
            <div className="right">
                <img className="treePhoto" src={props.treePhoto} alt="treePhoto" />
            </div>
        </div>
    )
};

export default TreeProfile;