import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ children, url, onClick,dissabled,className='' }) {
  if(url){
    return <Link to={url} className={`button ${className}`}>{children}</Link>;
  }
  return <button onClick={onClick} className={`button ${className}`} disabled={dissabled}>{children}</button>;
}

export default Button;
