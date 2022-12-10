import React from "react";
import './bookitem.css';

export const BookItem = ({book}) =>{
    return(
        <div className="bookitem">
            <div className="bookitem-details">
                <span className="bookitem-title"></span>
                <div className="bookitem-genre">
                    {
                    book.genres.map(genre => genre)
                    }
                </div>
                <div className="bookitem-buy">Buy</div>
            </div>
        </div>
    )
}