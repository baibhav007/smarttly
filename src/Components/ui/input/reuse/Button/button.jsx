import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.css';
import { RxFontFamily } from 'react-icons/rx';
const Button = ({ children,backgroundColor, color, borderColor ,onClick,disabled,fontFamily, ...rest }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || 'initial', 
    color: color || '#fff',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: '50px',
    fontSize: '18px',
    width:"Max-content",
    border: `1px solid ${borderColor || 'transparent'}`,
    pointerEvents: disabled ? 'none' : 'auto',
    fontFamily:fontFamily||"Inter",
  };

  return (
    <button
      className={classes.button}
      style={buttonStyle}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Button content
  backgroundColor:PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string, // Background color
  onClick: PropTypes.func, // Click event handler
  className: PropTypes.string, // Additional CSS class
};

export default Button;
