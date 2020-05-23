import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import LbRow from '../../components/LbRow/LbRow';
import ranks from '../../data/tree-points.json';

function Leaderboard() {
    // Initialize the points as the data that we passed in
    const [state, setState] = useState({
         ranks: ranks,
         sortBy: "first-to-last"
    });

    // Changes the sort method used by the leaderboard
    const changeSortBy = (event) => {
        var newSort = event.target.value;

        // Sorts the data differently depending on the select value
        switch(newSort) {
            case "first-to-last":
                sortDescending("points");
                break;
            case "last-to-first":
                sortAscending("points");
                break;
            case "z-to-a":
                sortDescending("tree_name");
                break;
            case "a-to-z":
                sortAscending("tree_name");
                break;
            default:
                sortDescending("points");
        }

    }

    /* Updates the leaderboard state to be in descending order of aspect */
    const sortDescending = (aspect) => {

        // Sorts the data in descending aspect order
        let sortedPoints = [...state.ranks.treePoints].sort((tree1, tree2) => {
            if (tree1[aspect] > tree2[aspect]) { return -1; }
            if (tree1[aspect] < tree2[aspect]) { return 1; }
            return 0;
        });

        // Actually updates the state
        setState({
            ranks: {
                ...state.ranks, // QUESTION: I will eventually remove this comment but, I'm confused what this line is for?
                treePoints: sortedPoints
            },
        });
    };

    /* Updates the leaderboard state to be in descending order of aspect */
    const sortAscending = (aspect) => {

        // Sorts the data in ascending aspect order
        let sortedPoints = [...state.ranks.treePoints].sort((tree1, tree2) => {
            if (tree1[aspect] < tree2[aspect]) { return -1; }
            if (tree1[aspect] > tree2[aspect]) { return 1; }
            return 0;
        });

        // Actually updates the state
        setState({
            ranks: {
                ...state.ranks, // QUESTION: I will eventually remove this comment but, I'm confused what this line is for?
                treePoints: sortedPoints
            },
        });
    };

    /* Calls sortLb on component mount */
    useEffect(() =>{
            sortDescending("points");
        } 
    ,[]);

    // Attributes used for rendering the leaderboard body
    var rank = 0;
    const currYear = new Date().getFullYear();
    const sortedData = state.ranks;

    /* Basically all the active trees with the first tree having the top rank */
    const lbBody = sortedData.treePoints.map((sortedData) => {
        return (
            sortedData.active &&
            <LbRow rank={++rank} tree_name={sortedData.tree_name} points={sortedData.points} active={sortedData.active}/>
        );
    });

    return (
        <div>
            <div className="header-section">
                <h1>Leaderboard</h1>
                <div className="filters">
                    {/* Allows user to sort by different methods */}
                    <label htmlFor="sortBy">Sort by: {'\u00a0'}</label>
                    <select name="sortBy" className="sortBy" value={state.sortBy} onChange={changeSortBy}>
                        <option value="first-to-last">First to Last</option>
                        <option value="last-to-first">Last to First</option>
                        <option value="a-to-z">A to Z</option>
                        <option value="z-to-a">Z to A</option>
                    </select>
                </div>
            </div>
            {/* The table with heading and sorted content */}
            <div className="table">
                <div className="table-heading">
                    <h1>Family Trees in {currYear}</h1>
                </div>
                {lbBody}
            </div>
        </div>
    );
}

export default Leaderboard;