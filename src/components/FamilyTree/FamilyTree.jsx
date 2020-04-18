import React, {useState, useRef,useEffect} from 'react';
import BitByteLabel from '../BitByteLabel/BitByteLabel';
import Tree from 'react-d3-tree';
import treeData from '../../data/tree-data.json'
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
        <p className="label-text">{nodeData.attributes.node_name}</p>
        {
          isHovering && // The below info will show up on hover
          <div class = "PopUp">
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
function FamilyTree() {

    const[state, setState] = useState({translate: {X:0, y:0}})
    const treeContainer = useRef(null)
    /* Used to center the tree on render */
    useEffect(()=> {
      // Center tree on render
      const dimensions = treeContainer.current.getBoundingClientRect();
      setState({
        translate: {
          x: 30,
          y: dimensions.height / 2
        }
      });
    }, []);

    /* Returns the actual tree content */
      /* Node shape */
        const nodeShape = {
          shape: 'rect',
          shapeProps: {
              width: 20,
              height: 20,
              x: -10,
              y: -10,
              stroke: 'steelblue',
              strokeWidth: 3,
              fill: 'white',
          }
      }
      return(
          <div class="treeWrapper" ref={treeContainer}>
              <Tree
                  data = {treeData}
                  translate = {state.translate}
                  nodeSvgShape = {nodeShape}
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