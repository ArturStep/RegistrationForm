import React from "react";

import logo from "../../assets/img/logo.png";
import s from "./Header.module.scss";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.headerLogo} src={logo} alt={'logo'}/>
            <h1>Registration form</h1>
        </header>
    )
}

export default Header;
