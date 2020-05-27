import React from 'react';

function GlossaryItem (props){
    return(
        <div>
            <a href={props.to}>{props.itemName}</a>
        </div>
    );
};

export default GlossaryItem;