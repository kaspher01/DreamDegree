import React, {useEffect, useState} from 'react';
import SearchBar from "../components/SearchBar";
import Academy from "../components/Academy";

const Academies = ({ academies }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showButton, setShowButton] = useState(false);

    const filteredAcademies = academies.filter(academy => {
        const academyName = academy.name ? academy.name.toLowerCase() : '';
        const query = searchQuery ? searchQuery.toLowerCase() : '';
        return academyName.startsWith(query);
    });
    const checkScrollTop = () => {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100){
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showButton]);
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };


    return (
        <>
            <div>
                {/* Your existing code here */}
                <button onClick={scrollToTop} className="scroll-to-top">^</button>
            </div>
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
