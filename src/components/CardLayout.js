import React from "react";
import "./card-layout.css";
import ProductCard from "./ProductCard";
import DarkCard from "./generics/DarkCard";
import Carousel from "./carousel/Carousel";

const CardLayout = ({products})=> {

    return(
        <DarkCard className='carousel-right'> 
            <Carousel>
                {products && products.length ?
                products.map((product, index)=>(
                    <ProductCard 
                        key={index}
                        image={product.image}
                        productName={product.product_name}
                        brandName={product.brand_name}
                        price={product.price}
                        location={product.address.city}
                        date={product.date}
                        description={product.discription}
                />
                )):null}
            </Carousel>
        </DarkCard>
        
    )
}

export default CardLayout;