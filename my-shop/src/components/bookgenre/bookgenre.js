import React from "react";
import './bookgenre.css';

export const BookGenre = ({genre}) =>{
    return(
        <span className="bookgenre">
            {genre}
        </span>
    )
}