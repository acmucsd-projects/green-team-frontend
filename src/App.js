import React from 'react';
import './App.css';
import BitByteNode from './BitByteNode.jsx'

function App() {

  /* Declaring as a variable for function call */
  var node1 = <BitByteNode 
    nodeName = "Waggie Wao"
    treeName = "Bug - free tree"
    since = "WI 20"
    college = "Sixth"
    major = "Computer Science"
    class = "2022"
  />
  return (
    node1
  );
}

export default App;
