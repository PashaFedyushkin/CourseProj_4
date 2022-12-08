import React from "react";
import { Link } from "react-router-dom";
import { BasketBlock } from '../basketblock'
import './header.css';

export const Header = () =>{
    return(
        <div className="header">
            <div className="wrapper">
                <Link to = "/" className="store-title">
                    Book Store
                </Link>
            </div>
            <div className="wrapper basket">
                <BasketBlock />
            </div>
        </div>
    )
}