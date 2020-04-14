import React from 'react';
import PropTypes from 'prop-types';
import './BitByteNode.css'; // Dummy CSS that will be changed later

import linkedin_logo from './img/linkedin_logo.png';
import facebook_logo from './img/facebook_logo.png';
import instagram_logo from './img/instagram_logo.png';

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
                {/* Basic info */}
                <p className = "BBN_h"> {this.props.node_name} </p>
                <p className="BBN_h">{this.props.tree_name} ({this.props.quarter_joined})</p>
                <p className="BBN_p">{this.props.college} | {this.props.major} | class of {this.props.class_year}</p>

                {/* Social media*/}
                <p>
                    <a href = {this.props.linkedin}><img src={linkedin_logo} alt="linkedin"/></a>
                    <a href = {this.props.facebook}><img src={facebook_logo} alt="facebook"/></a>
                    <a href = {this.props.instagram}><img src={instagram_logo} alt="instagram"/></a>
                </p>
            </div>
        );
    }
};

/* Defines propTypes in BitByteNode */
BitByteNode.propTypes ={
    // Identification props
    id: PropTypes.number.isRequired,
    node_name: PropTypes.string.isRequired,
    tree_name: PropTypes.string,
    // Personal info props
    quarter_joined: PropTypes.string,
    college: PropTypes.string,
    major: PropTypes.string,
    class_year: PropTypes.number,
    // Social media props
    linkedin: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
};

export default BitByteNode;