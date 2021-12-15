import React from 'react';
import "./cards.css";

const DarkCard = ({children, className})=>{

    return(
        <div className={`dark-card ${className}`} id={className}>
            {children}
        </div>
    )
}

export default DarkCard;