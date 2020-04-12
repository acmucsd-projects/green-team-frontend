import React from 'react';
import './App.css';
import BitByteNode from './BitByteNode.jsx'

function App() {

  /* Declaring as a variable for function call */
  var node1 = 
    <BitByteNode 
      id={12345678}
      node_name = "Waggie Wao"
      tree_name = "Bug - free tree"
      quarter_joined = "WI 20"
      college = "Sixth"
      major = "Computer Science"
      class_year = {2022}
      linkedin = "https://linkedin.com/in/YiyueMaggieMao"
      facebook = "https://www.facebook.com/YiyueMaggieMao"
      instagram = "https://www.instagram.com/maggie_maoph/"
    />

  return (
    node1
  );
}

export default App;
