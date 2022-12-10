import React from "react";
import './cartitem.css';

export const CartItem = ({
    title,
    price,
    id
}) =>{
    return(
        <div className="cartitem">
            <span>{title}</span>
            <div className="cartitem-price">
                <span>{price} BYN</span>
            </div>
        </div>
    )
}