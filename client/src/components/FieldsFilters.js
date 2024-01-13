import React, { useState } from 'react';
import '../styles/Checkboxes.css';

const FieldsFilters = ({ fields, selectedFields, onFieldCheckboxChange }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const sortedFields = fields
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'pl', { sensitivity: 'base' }));

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`dropdown ${isDropdownOpen ? 'on' : ''} fields`} data-control="checkbox-dropdown">
            <label className="dropdown-label" onClick={handleDropdownToggle}>
                Kierunki studiów
            </label>

            <div className="dropdown-list">
                {sortedFields.map((field) => (
                    <label key={field.id_field_of_study} className="dropdown-option">
                        <input
                            type="checkbox"
                            name="dropdown-group"
                            value={field.id_field_of_study}
                            checked={selectedFields.includes(field.id_field_of_study)}
                            onChange={() => onFieldCheckboxChange(field.id_field_of_study)}
                        />
                        {field.name}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FieldsFilters;
