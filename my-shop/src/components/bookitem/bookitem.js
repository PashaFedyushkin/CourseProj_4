import React from "react";
import { BookCover } from '../bookcover';
import { BookBuy } from '../bookbuy';
import { BookGenre } from '../bookgenre';
import './bookitem.css';

export const BookItem = ({ book }) => {
    return (
        <div className="bookitem">
            <BookCover image={book.image} />
            <div className="bookitem-details">
                <span className="bookitem-title">{book.title}</span>
                <div className="bookitem-genre">
                    {
                        book.genres.map((genre) => <BookGenre genre = {genre} key = {genre}/>)
                    }
                </div>
                <div className="bookitem-buy">
                    <BookBuy book = {book} />
                </div>
            </div>
        </div>
    )
}