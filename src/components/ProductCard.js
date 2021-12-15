import React from "react";
import "./product-card.css";
import LightCard from "./generics/LightCard";

const ProductCard = ({image, productName, brandName, price, location, date, description})=> {
    return(
        <LightCard className="pdts-layout">
                <div className="section1">
                    <img src={image} alt="Product Pic" id="product-image"/>
                    <div className="span-sect">
                       <span className="pdt-name highlight">{productName}</span>
                       <span>{brandName}</span>
                       <span className="highlight">$ {price}</span>
                    </div>
                </div>
                <div className="section2">
                    <div>
                        <span>{location}</span>
                    </div>
                    <div>
                        <span>Date: {date}</span>
                    </div>
                </div>
                <div>
                    <p className="pdt-description">{description}</p>
                </div>
        </LightCard>
    )
}

export default ProductCard;