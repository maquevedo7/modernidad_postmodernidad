import React from "react";
import style from "./Header.module.css";

function Header() {
    return (
        <div>
            <div className={style.header}>
                <h1 className={style.name}> PROGRAMMING CHALLENGES</h1>
            </div>
        </div>
    );
}

export default Header;
