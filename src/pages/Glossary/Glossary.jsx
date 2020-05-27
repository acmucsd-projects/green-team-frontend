import React, {useState, useEffect} from 'react';
import GlossaryItem from '../../components/GlossayItem/GlossaryItem'; 
import glossaryItems from '../../data/glossary-items.json';
import './style.css';

function Glossary(){

    const [items, setItems] = useState(glossaryItems);

    /* Sorts the items in alphabetical order */
    const sortItems = () =>{
        let sortedItems = [...items.glossaryItems].sort((item1, item2) => {
            if(item1.itemName < item2.itemName){
                return -1;
            }
            if(item1.itemName > item2.itemName){
                return 1;
            }
            return 0;
        });

        setItems({ glossaryItems: sortedItems });
    }

    /* Sorts the items on component render */
    useEffect(()=>{sortItems()},[]);

    const sortedItems = items;
    const glossary = sortedItems.glossaryItems.map((item) =>{
        return(
            <GlossaryItem itemName={item.itemName} to={item.to}/>
        );
    });

    return(
        <div>
            <h1 className="heading">Glossary</h1>
            <div className="glossary-body">
                {glossary}
            </div>
        </div>
    );
}

export default Glossary;