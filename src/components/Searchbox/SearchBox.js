import React from 'react'
import './SearchBox.css';

const SearchBox = ({onInputChange}) => {
    return (
        <div className="main">
            <input 
                type="text" 
                placeholder="Type Keywords..."
                onChange={(event) => onInputChange(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox;