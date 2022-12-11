import React from "react";
import { BookCover } from '../bookcover';
import { BookBuy } from '../bookbuy';
import { BookGenre } from '../bookgenre';
import './bookitem.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentBook } from "../../redux/book/reducer";

export const BookItem = ({ book }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentBook(book));
        navigate(`/app/{book.title}`)
    }
    return (
        <div className="bookitem" onClick = {handleClick}>
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