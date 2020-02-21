import React from "react";
import "./ValidationError.css";

export default function ValidationError(props) {
  // Outputs error messages for form validation
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}
