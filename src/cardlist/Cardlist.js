import React from 'react'
import Card from './cards/card'
import './Cardlist.css'

const renderCards = (props) =>{
    return (props.users.map(user => {
        return(
            <Card name = {user.name} 
            key = {user.id}
            email = {user.email}
            click = {() => props.clicked(user.id)}/>
        );
    }));
    
}

const cardlist = (props) =>{
    return(
        <div className = "containers">
            {renderCards(props)}
        </div>
    );
}

export default cardlist;