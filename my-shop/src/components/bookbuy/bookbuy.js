import React from "react";
import './bookbuy.css';
import {Button} from '../button';


export const BookBuy = ({book}) =>{
    return(
        <div className="bookbuy">
            <span className="bookbuy-price">{book.price} BYN</span>
            <Button 
                type='primary'
                onClick={()=>null}
            >
                В корзину
            </Button>
        </div>
    )
}