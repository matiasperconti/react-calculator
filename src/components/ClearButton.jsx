import React from "react";

const ClearButton = props => (
  <div className="ClearButton" onClick={props.manejarClear}>
      {props.children}
  </div>
)

export default ClearButton;