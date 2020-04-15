import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';
import BitByteNode from './BitByteNode.jsx'
import { node } from 'prop-types';

/** 
 * Our custom definition of a label on the tree 
 * This definition will allow us to view the information about a 
 * bit / byte by hovering over their name on the tree
 */
class NodeLabel extends React.PureComponent{
  
  /* Constructor to initialize state and bind function */
  constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state= {
      isHovering:false
    }
  }

  /* Event handler */
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  /* Toggles the isHovering state */
  toggleHoverState(state){
    return{
      isHovering: !state.isHovering,
    };
  }

  /* Returns the actual label*/
  render(){
    const{className, nodeData} = this.props
    return(
      // This division will react to mouse hovering
      <div 
        className = {className} 
        onMouseEnter = {this.handleMouseHover}
        onMouseLeave = {this.handleMouseHover}    
      >
        <p>{nodeData.attributes.node_name}</p>
        {
          this.state.isHovering && // The below info will show up on hover
          <BitByteNode
            id = {nodeData.attributes.id}
            node_name = {nodeData.attributes.node_name}
            tree_name = {nodeData.attributes.tree_name}
            quarter_joined = {nodeData.attributes.quarter_joined}
            college = {nodeData.attributes.college}
            major = {nodeData.attributes.major}
            class_year = {nodeData.attributes.class_year}
            linkedin = {nodeData.attributes.linkedin}
            facebook = {nodeData.attributes.facebook}
            instagram = {nodeData.attributes.instagram}
          />
        }
      </div>
    )
  }
}

/* Hard-coded data below */
const bitByteTreeData = [
  // Byte
  {
    name :'Waggie Mao',
    
    attributes:{
      id: 12345678,
      node_name : "Waggie Wao",
      tree_name : "Bug - free tree",
      quarter_joined : "WI 20",
      college : "Sixth",
      major : "Computer Science",
      class_year : 2022,
      linkedin : "https://linkedin.com/in/YiyueMaggieMao",
      facebook : "https://www.facebook.com/YiyueMaggieMao",
      instagram : "https://www.instagram.com/maggie_maoph/"
    },

    children:[
      // Bit 1
      {
        name : 'Judy Liu',
        attributes:{
          id: 12345679,
          node_name : "Judy Liu",
          tree_name : "Bug - free tree",
          quarter_joined : "WI 20",
          college : "Warren",
          major : "Math-CS",
          class_year : 2023,
          linkedin : "https://linkedin.com/in/YiyueMaggieMao",
          facebook : "https://www.facebook.com/YiyueMaggieMao",
         instagram : "https://www.instagram.com/maggie_maoph/"
        },
      },

      // Bit 2
      {
        name : 'Tiffany Chang',
        attributes:{
          id: 12345680,
          node_name : "Tiffany Chang",
          tree_name : "Bug - free tree",
          quarter_joined : "WI 20",
          college : "Warren",
          major : "Computer Science",
          class_year : 2023,
          linkedin : "https://linkedin.com/in/YiyueMaggieMao",
          facebook : "https://www.facebook.com/YiyueMaggieMao",
         instagram : "https://www.instagram.com/maggie_maoph/"
        },
      },
    ],
  },
];

/* We want to return the actual tree here */
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
    //node1
    <div id="treeWrapper" style = {{width: '1000px', height:'500px'}}>
    <Tree
      data = {bitByteTreeData}
      allowForeignObjects
      nodeLabelComponent={{
        render:<NodeLabel className="BitByteNodeLabel"/>,
        foreginObjectWrapper:{
          y : 24 
        }
      }}
    />
    </div>
  );
}

export default App;
