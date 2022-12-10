import React from "react";
import './bookcover.css';


export const BookCover = ({image = ""}) =>{
    return(
        <div className="bookcover" style = {{backgroundImage: `url(${image})`}}/>
    )
}