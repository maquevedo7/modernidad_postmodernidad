import React from "react";
import style from "./Header.module.css";

function Header() {
    return (
        <div>
            <div className={style.header}>
                <h1 className={style.name}> EL ARTE DE LAS BRUJAS </h1>
            </div>
        </div>
    );
}

export default Header;
