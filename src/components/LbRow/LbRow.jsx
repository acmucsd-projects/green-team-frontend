import React from 'react';
import PropTypes from 'prop-types';
import './LbRow.css';

function LbRow(props) {
    return(
        <div className="table-row">
            <div id="rank">{props.rank}</div>
            <div id="tree-name">{props.tree_name}</div>
            <div id="points">{props.points} pts</div>
        </div>
    );
}

/* Defines propTypes in LbRow */
LbRow.propTypes = {
    rank: PropTypes.number.isRequired,
    tree_name: PropTypes.string.isRequired,
    points: PropTypes.number,
    active: PropTypes.bool.isRequired
};

export default LbRow;