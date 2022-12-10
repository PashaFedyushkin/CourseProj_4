import React from "react";
import './itemsincart.css';

export const ItemsInCart = ({
    quantity = 0
}) =>{
    return quantity > 0 ? (
        <div className="itemsincart">
            { quantity }
        </div>
    ) : null
}