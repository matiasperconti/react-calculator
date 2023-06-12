import React from "react";

function Button (props) {
  const isOperator = (value) =>{
    if (value === '='){
      return 'equal';
    } else if ((isNaN(value)) && (value !== '.')){
      return 'operator';
    } else {
      return '';
    }
  }

  return (
    <div 
      className = {`button-container ${isOperator(props.children)}`.trimEnd()} 
      onClick = {() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  )
}

export default Button;