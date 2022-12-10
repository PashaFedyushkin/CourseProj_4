import React, { useState } from "react";
import {BiCartAlt} from 'react-icons/bi';
import { useSelector } from "react-redux";
import {CartMenu} from '../cartmenu';
import {ItemsInCart} from '../itemsincart';
import { calcTotalPrice } from "../utils";
import './basketblock.css';

export const BasketBlock = () =>{
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    return(
        <div className="basketblock">
            <ItemsInCart quantity = {items.length}/>
            <BiCartAlt size={25} className="basket-icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            { totalPrice > 0 ? <span className="basket-price">{totalPrice} BYN</span> : null}
            {isCartMenuVisible && <CartMenu items ={ items } onClick={ () => null}/>}
        </div>
    );
};