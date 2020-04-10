import React from 'react';
import './BitByteNode.css'; // Dummy CSS that will be changed later

/** 
 * Representes a node in the bit-byte tree
 * Declared as a class component for potential additional functions 
 */ 
class BitByteNode extends React.Component{
    constructor(props){super(props);}
    render(){
        return (
            /* Dummy display mode to see that all variables show up */
            <div className="BBN_div">
                <p className = "BBN_h"> {this.props.nodeName} </p>
                <p className="BBN_h">{this.props.treeName} ({this.props.since})</p>
                <p className="BBN_p">{this.props.college} | {this.props.major} | class of {this.props.class}</p>
            </div>
        );
    }
}

export default BitByteNode;