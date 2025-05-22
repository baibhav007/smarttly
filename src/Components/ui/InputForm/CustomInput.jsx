import React from "react";
import PropTypes from "prop-types";
import "./CustomInput.module.css"; 

function CustomInput({
  placeholder,
  borderColor = "#ccc", // Default border color
  padding = "12px 24px", // Default padding
  borderRadius = "5px",
  fontFamily = "Roboto", 
  fontWeight=400,
  color="var(--maintext)",
  onChange,
  value,
  ...props
}) {
  // Inline styling to accept dynamic props
  const inputStyle = {
    border: `2px solid ${borderColor}`,
    padding: padding,
    borderRadius: borderRadius,
    fontSize: "14px",
    fontFamily: fontFamily,
    fontWeight:fontWeight,
    color:color,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <input
      type="text"
      style={inputStyle}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
}

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  borderColor: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default CustomInput;
