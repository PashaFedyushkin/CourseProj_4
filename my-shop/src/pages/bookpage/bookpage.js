import React from "react";
import { useSelector } from "react-redux";
import { BookBuy } from "../../components/bookbuy";
import { BookCover } from "../../components/bookcover";
import { BookGenre } from "../../components/bookgenre";
import './bookpage.css';

export const BookPage = () =>{
  const book = useSelector(state => state.book.currentBook);
  if (!book) return null ;
    return(
        <div>
          <h1>
            {book.title}
          </h1>
          <div className="bookpage-content">
            <div className="bookpage-left">
              <iframe width="90%" height="400px" src = {book.video} title = "Yutube audio book"></iframe>
            </div>
            <div className="bookpage-right">
              <BookCover image = {book.image}/>
              <p>{book.description}</p>
              {book.genres.map((genre) => <BookGenre genre = {genre} key = {genre}/>)}
              <div className="bookpage-buy-book">
                <BookBuy book = {book}/>              
              </div>
            </div>
          </div>
        </div>
    )
}