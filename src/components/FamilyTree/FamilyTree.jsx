import React, {useState, useRef,useEffect} from 'react';
import BitByteLabel from '../BitByteLabel/BitByteLabel';
import Tree from 'react-d3-tree';
import './FamilyTree.css';

/**
 * Our custom definition of a label on the tree 
 * This definition will allow us to view the information about a 
 * bit / byte by hovering over their name on the tree
 */
function NodeLabel (props){
  const [isHovering, setHovering] = useState(false);
  const{className, nodeData} = props
    return(
      // This division will react to mouse hovering
      <div 
        className = {className} 
        onMouseEnter = {()=>setHovering(1)}
        onMouseLeave = {()=>setHovering(0)}    
      >
        <div className="label-text">
          {nodeData.attributes.node_name}<br/>
          ({nodeData.attributes.class_year})
        </div>
        {
          isHovering && // The below info will show up on hover
          <div className = "PopUp">
          <BitByteLabel
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
            profile_link = {nodeData.attributes.profile_link}
          />
          </div>
        }
      </div>
    )
}

/** 
 * Component returning a div containing a tree
 * Need to declare as class for ComponentDidMount() 
 */
function FamilyTree(props) {

    const[state, setState] = useState({translate: {X:0, y:0}})
    const treeContainer = useRef(null)
    /* Used to center the tree on render */
    useEffect(()=> {
      // Center tree on render
      const dimensions = treeContainer.current.getBoundingClientRect();
      setState({
        translate: {
          x: dimensions.width / 2,
          y: 30
        }
      });
    }, []);

    /* Returns the actual tree content */
      /* Node shape */
      const nodeShape = {
        shape: 'image',
        shapeProps: {
            width: 60,
            height: 60,
            x: -30,
            y: -30,
            href:"https://i.ibb.co/1n5F04c/tree-node.png", // Local links don't work somehow
        }
      }
      return(
          <div className="treeWrapper" ref={treeContainer}>
              <Tree
                  data = {props.treeData}
                  translate = {state.translate}
                  nodeSvgShape = {nodeShape}
                  orientation =  "vertical"
                  pathFunc = "straight"
                  allowForeignObjects
                  nodeLabelComponent={{
                      render:<NodeLabel className="BitByteNodeLabel"/>,
                      foreginObjectWrapper:{
                      y : 12 
                  }
              }}
              />
          </div>
      );
}

export default FamilyTree;