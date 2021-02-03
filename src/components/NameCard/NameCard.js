import React from 'react'
import './NameCard.css';

const domainURL = "https://www.namecheap.com/domains/registration/results/?domain="

const NameCard = ({name}) => {
    return (
        <a 
            href={`${domainURL}${name}`}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className="card">
                <h2>{name}</h2>
            </div>
        </a>
    )
}

export default NameCard;