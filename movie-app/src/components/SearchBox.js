import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="d-flex justify-content-end m-2">
            <input 
                className="frorm-control"
                value={props.value} 
                onKeyUp={ (event) => props.setSearchValue(event.target.value)}
                placeholder="Type to search...">
            </input>
        </div>
    )
};

export default SearchBox;