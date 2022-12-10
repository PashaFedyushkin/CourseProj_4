import React from "react";
import './bookbuy.css';
import { useDispatch, useSelector } from "react-redux";
import {Button} from '../button';
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";


export const BookBuy = ({book}) =>{
const dispatch = useDispatch();
const items = useSelector(state => state.cart.itemsInCart);
const isItemInCart = items.some(item => item.id === book.id);

    const handleClick= (e) =>{
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(book.id))
        } else{
            dispatch(setItemInCart(book))
        }
    }

    return(
        <div className="bookbuy">
            <span className="bookbuy-price">{book.price} BYN</span>
            <Button 
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}
            >
                {isItemInCart ? "Убрать из корзины" : "В корзину"} 
            </Button>
        </div>
    )
}