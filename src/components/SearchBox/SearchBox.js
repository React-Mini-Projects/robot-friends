import React from 'react'

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa3 ">
            <input
                type="search"
                placeholder="Search Robots"
                className="pa3 search bg-lightest-blue" 
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox
