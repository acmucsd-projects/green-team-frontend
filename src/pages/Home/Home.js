import React from 'react';
import '../style.css';
import FamilyTree from '../../components/FamilyTree/FamilyTree'
import TreeProfile from '../../components/TreeProfile/TreeProfile'
import treeData from '../../data/tree-data.json'

function Home() {
  return (
    <div className="Home">
      <div className="title">
        <h1>ACM has over 30 active trees a year</h1>
      </div>

      <div className="info">
        <div className="description">
          <div className="text">
            Bits and Bytes connect a long lineage of ACM members which started in 2020. These special relationships are recorded in their family trees, which ACM has over 100. Each year the trees compete amongst each other in the ACM House Cup.
            <br />
            <br />
            Interested in checking them out? Take a look at this year’s trees below or view past trees in the Glossary.
          </div>
        </div>
        
        <h1>Family Trees in 2025</h1>
        <div className = "tree">
          <FamilyTree treeData={treeData}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
