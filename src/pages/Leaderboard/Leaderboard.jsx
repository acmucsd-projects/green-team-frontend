import React from 'react';
import './Leaderboard.css';
import LbRow from '../../components/LbRow/LbRow';
import points from '../../data/tree-points.json';

var rank = 0;

/* Basically all the active trees with the first tree having the top rank */
const lbBody = points.map( (data) => {
        return(
            data.active&&
            <LbRow rank={++rank} tree_name={data.tree_name} points={data.points}/>
        );
    }
);

function Leaderboard(){
    return(
        <div className="table">
            <div className="table-heading">
            <div id="heading-rank">Rank</div>
            <div id="heading-tree-name">Tree Name</div>
            <div id="heading-points">Points</div>
        </div>
            {lbBody}
        </div>
    );
}

export default Leaderboard;