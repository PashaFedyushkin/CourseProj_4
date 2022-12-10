import React from "react";
import {BiCartAlt} from 'react-icons/bi';
import './basketblock.css';

export const BasketBlock = () =>{
    return(
        <div className="basketblock">
            <BiCartAlt size={25} className="basket-icon"/>
            <span className="basket-price">2500 BYN</span>
        </div>
    )
}