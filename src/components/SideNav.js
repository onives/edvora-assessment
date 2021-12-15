import React, {useState, useEffect } from 'react';
import DarkCard from './generics/DarkCard';
import { Nav, Dropdown, DropdownButton} from 'react-bootstrap';
import "./card-layout.css";
import DropDownList from './DropDownList';

const SideNav = ({products, onBrandSelect, 
     onStateSelect, onCitySelect,
     onSelectionClear})=>{
    const [brandNames, setBrandNames] = useState([]);
    const [cityNames, setCityNames] = useState([]);
    const [stateNames, setStateNames] = useState([]);


    useEffect(()=>{
        console.log(products)

        let  brand_names;
        let city_names;
        let state_names

        if (products.length) {
            brand_names = products.map(product => product.brand_name)
            brand_names = new Set(brand_names)
            brand_names = [...brand_names]
            setBrandNames(brand_names)

            city_names = products.map(product => product.address.city)
            city_names = new Set(city_names);
            city_names = [...city_names]
            setCityNames(city_names)

            state_names = products.map(product => product.address.state)
            state_names = new Set(state_names);
            state_names = [...state_names]
            setStateNames(state_names)

        }
    }, [products])

    const brandSelectHandler = (value) => {
        // console.log('selected', value);
        onBrandSelect({type: 'Brand', value})
    }

    const stateSelectHandler = (value) => {
        // console.log('selected', value);
        onStateSelect({type: 'State', value})
    }

    const citySelectHandler = (value) => {
        // console.log('selected', value);
        onCitySelect({type: 'City', value})
    }

    const clearSelectHandler = (value) => {
        onSelectionClear({type: 'Clear', value})
    }
    return(
        <DarkCard className="small" id="small">
            <div className='filters-title'>
                <span className='filters'>Filters</span>
                <hr/>
            </div>
            
            <Nav defaultActiveKey="/home" className="flex-column">
                <DropdownButton title="Products" id="navbarScrollingDropdown" onSelect={brandSelectHandler}>
                    {brandNames.map((name, index)=>(
                        <DropDownList dropDownTitle={name} key={index} />
                    ))}
                    <Dropdown.Divider />
                </DropdownButton>
                <DropdownButton title="State" id="navbarScrollingDropdown" onSelect={stateSelectHandler}>
                    {stateNames.map((sname, index)=>(
                        <DropDownList dropDownTitle={sname} key={index} />
                    ))}
                    <Dropdown.Divider />
                </DropdownButton>
                <DropdownButton title="City" id="navbarScrollingDropdown" onSelect={citySelectHandler}>
                    {cityNames.map((cname, index)=>(
                        <DropDownList dropDownTitle={cname} key={index} />
                    ))}
                    <Dropdown.Divider />
                </DropdownButton>
                <DropdownButton 
                title="Clear Selection" 
                id="navbarScrollingDropdown" 
                onSelect={clearSelectHandler}>
                <Dropdown.Item eventKey={'Clear'}>{'Clear Selection'}</Dropdown.Item> 
                </DropdownButton>
            </Nav>
           
        </DarkCard>
    )
}
export default SideNav;