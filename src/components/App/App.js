import React from 'react';
import FamilyTree from '../FamilyTree/FamilyTree'
import treeData from '../../data/tree-data.json'
import './App.css';

function App() {
  return (
    <FamilyTree treeData={treeData}/>
  );
}

export default App;
