import React from 'react';


const Filters = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Wyszukaj uczelnię po nazwie"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <img src='/images/search_icon.jpg' alt="search icon" className="search-icon" />
        </div>
    );
};

export default Filters;