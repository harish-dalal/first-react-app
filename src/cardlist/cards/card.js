import React from 'react'
import './card.css'

const card = (props) =>{
    return(
        <div className = "container" onClick = {() => props.click()}>
            <h1>{props.name}</h1>   
        </div>
    );
}

export default card;