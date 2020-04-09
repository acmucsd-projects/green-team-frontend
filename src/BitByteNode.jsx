import React from 'react';

/** 
 * Representes a node in the bit-byte tree
 * Declared as a class component for potential additional functions 
 */ 
class BitByteNode extends React.Component{
    constructor(props){super(props);}
    render(){
        /* Dummy display mode to see that all variables show up */
        return (
            <div>
                <h3> {this.props.nodeName} </h3>
                <h5>{this.props.treeName}</h5>
                <p>{this.props.college} | {this.props.major} | class of {this.props.class}</p>:
            </div>
        );
    }
}

export default BitByteNode;