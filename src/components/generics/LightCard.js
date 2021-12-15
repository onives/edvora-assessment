import React from 'react';
import "./cards.css";

const LightCard = ({children, className})=>{

    return(
        <div className={`light-card ${className}`}>
            {children}
        </div>
    )
}

export default LightCard;