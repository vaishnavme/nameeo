import React from 'react';
import './Result.css';
import NameCard from '../NameCard/NameCard';

const Result = ({ suggestedNames }) => {

    const suggestedListNames = suggestedNames.map(name => {
        return <NameCard key={name} name={name}/>
    })

    return (
       <div className="card-container">
           {suggestedListNames}
       </div>
    )
}

export default Result;