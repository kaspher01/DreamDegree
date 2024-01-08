import React from 'react';

const Checkboxes = ({ fields, selectedFields, onCheckboxChange }) => {
    return (
        <div className="checkboxes">
            {fields.map((field) => (
                <label key={field.id_field_of_study}>
                    <input
                        type="checkbox"
                        value={field.name}
                        checked={selectedFields.includes(field.id_field_of_study)}
                        onChange={() => onCheckboxChange(field.id_field_of_study)}
                    />
                    {field.name}
                </label>
            ))}
        </div>
    );
};

export default Checkboxes;