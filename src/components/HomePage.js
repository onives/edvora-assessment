import React, {useState, useEffect} from 'react';
import SideNav from './SideNav';
import CardLayout from './CardLayout';
import './homepage.css';
import axios from 'axios';


const HomePage = ()=>{
    const [products, setProducts] = useState([]);
    const [filteredPdts, setFilteredPdts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        axios.get("https://assessment-edvora.herokuapp.com")
        .then(res=>{
            setLoading(false)
            setProducts(res.data)
            setFilteredPdts(res.data)
        }).catch(()=>setLoading(false))
    }, [])

    const handleFilters = (payload)=>{
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
        <div style={{flex:1, flexDirection:"row", display:"flex", maxWidth:"100%", marginTop:"1%"}}>
            <div style={{flex:1, justifyContent:"center", alignContent:"center", padding:8, marginTop:"1.5%"}}>
                <SideNav 
                onBrandSelect={handleFilters}
                onCitySelect={handleFilters}
                onStateSelect={handleFilters}
                onSelectionClear={handleFilters} 
                products={products}
            />
            </div>
            <div style={{flex:3, padding: 12, maxWidth: "80%"}}>
            <div>
                <div>
                    <h1 className='heading'>Edvora</h1>
                    <h2 className='sub-heading'>Products</h2>
                    <h3>Product Name</h3>
                    <hr/>
                </div>
                {!loading ? <CardLayout products={filteredPdts} />: <div style={{textAlign:"center"}}>Loading...</div>}
            </div>
            </div>
        </div>
    )
}
export default HomePage;