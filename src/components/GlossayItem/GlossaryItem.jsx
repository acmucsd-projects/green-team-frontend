import React from 'react';
import './style.css';

function GlossaryItem (props){
    return(
        <div className="glossary-item">
            <a className="glossary-link" href={props.to}>{props.itemName}</a>
        </div>
    );
};

export default GlossaryItem;