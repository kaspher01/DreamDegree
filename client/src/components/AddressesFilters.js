import React, { useState } from 'react';
import '../styles/Checkboxes.css';

const AddressesFilters = ({ addresses, selectedAddresses, onAddressCheckboxChange }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const addressesByCity = addresses.reduce((acc, address) => {
        const { city } = address;
        acc[city] = (acc[city] || []).concat(address);
        return acc;
    }, {});

    const uniqueCities = Object.keys(addressesByCity);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`dropdown ${isDropdownOpen ? 'on' : ''} addresses`} data-control="checkbox-dropdown">
            <label className="dropdown-label" onClick={handleDropdownToggle}>
                Miasta
            </label>

            <div className="dropdown-list">
                {uniqueCities.map(city => (
                    <label key={city} className="dropdown-option">
                        <input
                            type="checkbox"
                            name="dropdown-group"
                            value={city}
                            checked={selectedAddresses.includes(city)}
                            onChange={() => onAddressCheckboxChange(city)}
                        />
                        {city}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AddressesFilters;