import React from "react";
import trollface from '../imgs/trollface.png'

export default function Header(){
    return(
        <header className="Header">
        <div className="logohead">
        <img src={trollface} alt="" />
            <h1>Meme Generator</h1>
            </div>
            <h4>React Project 3</h4>
        </header>
    )
}