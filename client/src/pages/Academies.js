import React, { useEffect, useState } from 'react';
import SearchBar from "../components/SearchBar";
import FieldsFilters from "../components/FieldsFilters";
import Academy from "../components/Academy";
import AddressesFilters from "../components/AddressesFilters";

const Academies = () => {
    const [academies, setAcademies] = useState([]);
    const [fields, setFields] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [academiesFields, setAcademiesFields] = useState([]);
    const [selectedFields, setSelectedFields] = useState([]);
    const [selectedAddresses, setSelectedAddresses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:3001/api/academies').then((response) => response.json()),
            fetch('http://localhost:3001/api/fields').then((response) => response.json()),
            fetch('http://localhost:3001/api/addresses').then((response) => response.json()),
            fetch('http://localhost:3001/api/academiesFields').then((response) => response.json())
        ])
            .then(([academiesData, fieldsData, addressesData, academiesFieldsData]) => {
                setAcademies(academiesData);
                setFields(fieldsData);
                setAddresses(addressesData);
                setAcademiesFields(academiesFieldsData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

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

    return (
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
                        name={academy.name}
                        link={academy.link}
                        fields={getAcademyFields(academy.id_academy)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Academies;
