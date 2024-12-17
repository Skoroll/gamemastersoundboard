import React from "react";
import Nav from "./Nav";
import logo from "../../../assets/e4aeef95-6e0c-4e93-80b2-5ca7ce9abde8.webp"
import "./Header.scss";

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo GameMasterSoundBoard"/>
            <Nav />
        </header>
    )
}

export default Header;