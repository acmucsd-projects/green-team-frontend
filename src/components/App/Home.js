import React from 'react';
import './Home.css';
import FamilyTree from '../FamilyTree/FamilyTree'
import TreeProfile from '../TreeProfile/TreeProfile'
import treeData from '../../data/tree-data.json'

function Home() {
  return (
    <div className="Home">
      <h1>ACM has over 30 active trees a year</h1>
      <div className="home-info">
        <div className="home-description"> 
          <div className="home-text">
            <span>
            Bits and Bytes connect a long lineage of ACM members which started in 2020. These special relationships are recorded in their family trees, which ACM has over 100. Each year the trees compete amongst each other in the ACM House Cup.
            </span>
            <br />
            <br />
            <span>
            Interested in checking them out? Take a look at this year’s trees below or view past trees in the Glossary.
            </span>
            <h1>Family Trees in 2025</h1>
          </div>
        </div>
        <div className = "tree">
          <FamilyTree treeData={treeData}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
