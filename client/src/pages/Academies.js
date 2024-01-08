import React, {useState} from 'react';
import SearchBar from "../components/SearchBar";
import Academy from "../components/Academy";

const Academies = ({ academies }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAcademies = academies.filter(academy => {
        const academyName = academy.name ? academy.name.toLowerCase() : '';
        const query = searchQuery ? searchQuery.toLowerCase() : '';
        return academyName.startsWith(query);
    });

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

    return (
        <>
            <div className="search-title">
                <h1>Uczelnie</h1>
            </div>
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
            <div className="academies-container">
                {filteredAcademies.map((academy) => (
                    <Academy key={academy._id} {...academy} />
                ))}
            </div>
        </>
    );
};

export default Academies;
