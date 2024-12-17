import React, { useState } from 'react';
import './Collapses.scss'; 

const Collapses = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        
       
        <p className="collapse__header--title">{title}</p>
 
        <span className="collapse__icon">{isOpen ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}</span>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
};

export default Collapses;
