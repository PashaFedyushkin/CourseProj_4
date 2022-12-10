import React from "react";
import { Button } from "../button";
import { calcTotalPrice } from "../utils";
import { CartItem } from "../cartitem";
import './cartmenu.css';

export const CartMenu = ({ items, onClick }) => {
    return (
    <div className="cartmenu">
        <div className="cartmenu-books-list">
            {
                items.length > 0 ? items.map((book) => <CartItem key = {book.title} price = {book.price} title = {book.title} id = {book.id}/>) : "Корзина пуста"
            }
        </div>
        {
            items.length > 0 ? (
                <div className="cartmenu-arrange">
                    <div className="cartmenu-total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} BYN</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
              )  : null
        }
    </div>
    );
};