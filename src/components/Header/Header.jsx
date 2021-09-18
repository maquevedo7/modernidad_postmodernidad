import React from 'react'
import style from './Header.module.css'

function Header() {
    return (
        <div>
            <div className={style.header}>

                <h1 className={style.nm}>50 CHALLENGES</h1>
                <button class="btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Header
