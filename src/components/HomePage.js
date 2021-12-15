import React, {useState, useEffect} from 'react';
import SideNav from './SideNav';
import CardLayout from './CardLayout';
import './homepage.css';
import axios from 'axios';

// import {Container, Row, Col} from 'react-bootstrap';

const HomePage = ()=>{
    const [products, setProducts] = useState([]);
    const [filteredPdts, setFilteredPdts] = useState([]);

    useEffect(()=>{
        axios.get("https://assessment-edvora.herokuapp.com")
        .then(res=>{
            // console.log(res)
            setProducts(res.data)
            setFilteredPdts(res.data)
        })
    }, [])

    const handleFilters = (payload)=>{
        // const filteredProducts = products.filter(()=>{

        // })
        // console.log('selection', payload)
        let filteredProducts = null;

        switch (payload.type) {
            case 'Brand':
                console.log('Filter by brand', payload.value);
                filteredProducts = products.filter(product => 
                    product.brand_name.toLowerCase().match(payload.value.toLowerCase()))
                setFilteredPdts(filteredProducts)
                break;
            case 'State':
                console.log('Filter by State')
                filteredProducts = products.filter(product => 
                    product.address.state.toLowerCase().match(payload.value.toLowerCase()))
                setFilteredPdts(filteredProducts)
                break;
            case 'City':
                console.log('Filter by city');
                filteredProducts = products.filter(product => 
                    product.address.city.toLowerCase().match(payload.value.toLowerCase()))
                setFilteredPdts(filteredProducts)
                break;
            default:
                setFilteredPdts(products);
        }
    }

    return(
        <div className='homepage'>
            <div>
                <SideNav 
                    onBrandSelect={handleFilters} 
                    onCitySelect={handleFilters} 
                    onStateSelect={handleFilters}
                    onSelectionClear={handleFilters} 
                    products={products} 
            />
            </div>
            <div>
                <CardLayout products={filteredPdts} />
            </div>
            {/* <Row>
                <Col lg={4} md={6}>
                    <SideNav />
                </Col>
                <Col lg={4} md={6}>
                    <CardLayout />
                </Col>
            </Row> */}

        </div>
    )
}
export default HomePage;