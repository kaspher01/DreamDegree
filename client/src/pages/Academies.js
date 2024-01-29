import React, { useEffect, useState } from 'react';
import SearchBar from "../components/SearchBar";
import FieldsFilters from "../components/FieldsFilters";
import Academy from "../components/Academy";
import AddressesFilters from "../components/AddressesFilters";
import useToken from "../components/LoginComponent/UseToken";

const Academies = () => {
    const [academies, setAcademies] = useState([]);
    const [fields, setFields] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [academiesFields, setAcademiesFields] = useState([]);
    const [selectedFields, setSelectedFields] = useState([]);
    const [selectedAddresses, setSelectedAddresses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [favourites, setFavourites] = useState([]);

    const { token } = useToken();

    useEffect(() => {

        Promise.all([
            fetch('http://localhost:3001/api/academies').then((response) => response.json()),
            fetch('http://localhost:3001/api/fields').then((response) => response.json()),
            fetch('http://localhost:3001/api/addresses').then((response) => response.json()),
            fetch('http://localhost:3001/api/academiesFields').then((response) => response.json()),
            fetch('http://localhost:3001/api/favourites?' + new URLSearchParams({ userId: token ? token.userId : null })).then((response) => response.json())

        ])
            .then(([academiesData, fieldsData, addressesData, academiesFieldsData, favouritesData]) => {
                setAcademies(academiesData);
                setFields(fieldsData);
                setAddresses(addressesData);
                setAcademiesFields(academiesFieldsData);
                setFavourites(favouritesData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [favourites, token]);

    const filterAcademies = () => {
        return academies.filter((academy) => {
            const academyName = academy.name ? academy.name.toLowerCase() : '';
            const query = searchQuery ? searchQuery.toLowerCase() : '';
            const associatedFields = academiesFields.filter((field) => field.id_academy === academy.id_academy);
            const associatedAddress = addresses.find((address) => address.id_address === academy.id_address);
            const associatedFieldIds = associatedFields.map((field) => field.id_field_of_study);

            const isCitySelected = selectedAddresses.length === 0 || selectedAddresses.includes(associatedAddress.city);

            return (
                (selectedFields.length === 0 ||
                    associatedFieldIds.some((fieldId) => selectedFields.includes(fieldId))) &&
                isCitySelected &&
                academyName.includes(query)
            );
        });
    };

    const getAcademyFields = (academyId) => {
        const associatedFields = academiesFields.filter((field) => field.id_academy === academyId);
        return associatedFields.map((field) => {
            const fieldInfo = fields.find((f) => f.id_field_of_study === field.id_field_of_study);
            return fieldInfo ? fieldInfo.name : '';
        }).sort();
    };

    const handleFieldCheckboxChange = (fieldId) => {
        setSelectedFields((prevFields) => {
            if (prevFields.includes(fieldId)) {
                return prevFields.filter((id) => id !== fieldId);
            } else {
                return [...prevFields, fieldId];
            }
        });
    };

    const handleAddressCheckboxChange = (city) => {
        setSelectedAddresses((prevAddresses) => {
            if (prevAddresses.includes(city)) {
                return prevAddresses.filter((selectedCity) => selectedCity !== city);
            } else {
                return [...prevAddresses, city];
            }
        });

    };

    const handleSearchChange = (value) => {
        setSearchQuery(value.toLowerCase());
    };
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
    }, );
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <div>

            <button onClick={scrollToTop} className="scroll-to-top">^</button>
        </div>
        <div>
            <h1>Uczelnie</h1>
            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />
            <h2>Filtrowanie</h2>
            <FieldsFilters
                fields={fields}
                selectedFields={selectedFields}
                onFieldCheckboxChange={handleFieldCheckboxChange}
            />
            <AddressesFilters
                addresses={addresses}
                selectedAddresses={selectedAddresses}
                onAddressCheckboxChange={handleAddressCheckboxChange}
            />
            <div>
                {filterAcademies().map((academy) => (
                    <Academy
                        key={academy.id_academy}
                        id={academy.id_academy}
                        name={academy.name}
                        link={academy.link}
                        fields={getAcademyFields(academy.id_academy)}
                        token={token}
                        favourites={favourites}
                    />
                ))}
            </div>
        </div>
            </>
    );

};

export default Academies;
