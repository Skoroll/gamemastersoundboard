import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoUp.scss"

function GoUp() {
  const UpOnClick = () =>{
    window.scrollTo(0, 0)
  }

  return (
    <div onClick={UpOnClick} className="go-up">
      <i className="fa-solid fa-arrow-up"></i> 
      
    </div>
  );
}

export default GoUp;
