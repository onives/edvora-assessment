import React from "react";
import { Dropdown} from 'react-bootstrap';
import "./card-layout.css";

const DropDownList = ({dropDownTitle})=>{

    return(
        <>
        <Dropdown.Item eventKey={dropDownTitle}>{dropDownTitle}</Dropdown.Item> 
        </>
    )

}
export default DropDownList;