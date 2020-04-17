import React from 'react';
import PropTypes from 'prop-types';
import './BitByteLabel.css'; // Dummy CSS that will be changed later

import linkedin_logo from '../img/linkedin_logo.png';
import facebook_logo from '../img/facebook_logo.png';
import instagram_logo from '../img/instagram_logo.png';

/** 
 * A concise pop-up label for the family tree
 */
function BitByteLabel(props) {
    return (
        /* Dummy display mode to see that all variables show up */
        <div className="BBN_div">
            {/* Social media*/}
            <p>
                <a href={props.linkedin}><img src={linkedin_logo} alt="linkedin" /></a>
                <a href={props.facebook}><img src={facebook_logo} alt="facebook" /></a>
                <a href={props.instagram}><img src={instagram_logo} alt="instagram" /></a>
            </p>

            {/* Basic info */}
            <p className="BBN_p"> {props.major} '{props.class_year - 2000}</p>
            <p className="BBN_p"> {props.college} college</p>
        </div>
    );
};

/* Defines propTypes in BitByteNode */
BitByteLabel.propTypes = {
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

export default BitByteLabel;