import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Wyszukaj uczelnię po nazwie"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <img src='/images/search_icon.png' alt="search icon" className="search-icon" />

        </div>
    );
};

export default SearchBar;