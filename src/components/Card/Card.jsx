import style from "./Card.module.css";
import React from "react";

function Card({ props }) {
    return (
        <div className={style.cardContainer}>
            <figure>
                <img className={style.front} src={props.img} alt="" />

                <figcaption className={style.back}>
                    <div className={style.title}>
                        <h1>{props.title}</h1>
                    </div>
                    <div className={style.description}>
                        <p>{props.description}</p>
                    </div>
                    <div className={style.btns}>
                        <div className={style.btn}>
                            <a href={props.github}>repository</a>
                        </div>
                        <div className={style.btn}>
                            <a href={props.deploy}>deploy</a>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;
