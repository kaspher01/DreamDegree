import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Wyszukaj uczelnię po nazwie"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
