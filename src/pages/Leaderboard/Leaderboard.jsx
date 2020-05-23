import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import LbRow from '../../components/LbRow/LbRow';
import points from '../../data/tree-points.json';

function Leaderboard() {
    // Initialize the points as the data that we passed in
    const [state, setState] = useState({ points: points });

    /* Updates the leaderboard state to be in descending point order */
    const sortLb = () => {

        // Sorts the data in descending points order
        let sortedPoints = [...state.points.treePoints].sort((tree1, tree2) => {
            if (tree1.points > tree2.points) { return -1; }
            if (tree1.points < tree2.points) { return 1; }
            return 0;
        });

        // Actually updates the state
        setState({
            points: {
                ...state.points, // QUESTION: I will eventually remove this comment but, I'm confused what this line is for?
                treePoints: sortedPoints
            }
        });

    };

    /* Calls sortLb on component mount */
    useEffect(() =>{
            sortLb();
        } 
    ,[]);

    // Attributes used for rendering the leaderboard body
    var rank = 0;
    const sortedData = state.points;

    /* Basically all the active trees with the first tree having the top rank */
    const lbBody = sortedData.treePoints.map((sortedData) => {
        return (
            sortedData.active &&
            <LbRow rank={++rank} tree_name={sortedData.tree_name} points={sortedData.points} active={sortedData.active}/>
        );
    });

    return (
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