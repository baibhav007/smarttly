import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Importing the icon
import styles from './Dropdown.module.css'; 

const Dropdown = ({
  options = [], // Array of options to display
  placeholder = 'Select an option', // Placeholder text
  onSelect = () => {}, // Callback when an option is selected
  customStyles = {}, // Additional styles for customization
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  // Toggle the dropdown menu
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle option selection
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // Notify parent component
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef} style={customStyles.container}>
      <div
        className={styles.dropdownheader}
        onClick={toggleDropdown}
        style={customStyles.header}
      >
        {selected ? selected.label : placeholder}
        <MdKeyboardArrowDown
          className={styles.dropdownarrow}
          style={{
            fontSize: '1.5rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
            ...customStyles.arrow,
          }}
        />
      </div>

      {isOpen && (
        <ul className={styles.dropdownlist} style={customStyles.list}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownitem}
              onClick={() => handleSelect(option)}
              style={customStyles.item}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
