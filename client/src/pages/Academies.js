import React, { useEffect, useState } from 'react';
import SearchBar from "../components/SearchBar";
import Checkboxes from "../components/Checkboxes";
import Academy from "../components/Academy";

const Academies = () => {
    const [academies, setAcademies] = useState([]);
    const [fields, setFields] = useState([]);
    const [academiesFields, setAcademiesFields] = useState([]);
    const [selectedFields, setSelectedFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        Promise.all([
            fetch('http://localhost:3001/api/academies').then((response) => response.json()),
            fetch('http://localhost:3001/api/fields').then((response) => response.json()),
            fetch('http://localhost:3001/api/academiesFields').then((response) => response.json())
        ])
            .then(([academiesData, fieldsData, academiesFieldsData]) => {
                setAcademies(academiesData);
                setFields(fieldsData);
                setAcademiesFields(academiesFieldsData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const filterAcademies = () => {
        return academies.filter((academy) => {
            const academyName = academy.name ? academy.name.toLowerCase() : '';
            const query = searchQuery ? searchQuery.toLowerCase() : '';
            const associatedFields = academiesFields.filter((field) => field.id_academy === academy.id_academy);
            const associatedFieldIds = associatedFields.map((field) => field.id_field_of_study);
            return (
                (selectedFields.length === 0 || associatedFieldIds.some((fieldId) => selectedFields.includes(fieldId))) &&
                academyName.startsWith(query)
            );
        });
    };

    const getAcademyFields = (academyId) => {
        const associatedFields = academiesFields.filter((field) => field.id_academy === academyId);
        return associatedFields.map((field) => {
            const fieldInfo = fields.find((f) => f.id_field_of_study === field.id_field_of_study);
            return fieldInfo ? fieldInfo.name : '';
        });
    };

    const handleCheckboxChange = (fieldId) => {
        setSelectedFields((prevFields) => {
            if (prevFields.includes(fieldId)) {
                return prevFields.filter((id) => id !== fieldId);
            } else {
                return [...prevFields, fieldId];
            }
        });
    };

    const handleSearchChange = (value) => {
        setSearchQuery(value.toLowerCase());
    };

    return (
        <div>
            <h1>Uczelnie</h1>
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <Checkboxes fields={fields} selectedFields={selectedFields} onCheckboxChange={handleCheckboxChange} />
            <div>
                {filterAcademies().map((academy) => (
                    <Academy key={academy.id_academy} name={academy.name} link={academy.link} fields={getAcademyFields(academy.id_academy)} />
                ))}
            </div>
        </div>
    );
};

export default Academies;
