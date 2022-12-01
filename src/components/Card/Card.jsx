import style from "./Card.module.css";
import React from "react";

function Card({ props }) {
    return (
        <div className={style.cardContainer}>
            <figure>
                <img className={style.front} src={props.img} alt="" />

                <figcaption className={style.back}>
                    <div className="generalContainer">
                        <div className={style.title}>
                            <h1>{props.title}</h1>
                            <h3>{props.autor}</h3>
                            <h3>{props.year}</h3>
                        </div>
                        <div className={style.description}>
                            <p>
                                <b>Material: </b>
                                <br />
                                {props.material}
                            </p>{" "}
                            <br />
                            <p>
                                <b>Localización: </b>
                                <br />
                                {props.localization}
                            </p>{" "}
                            <br />
                            <p>
                                <b>Movimiento: </b>
                                <br />
                                {props.mov}
                            </p>
                        </div>
                    </div>
                    <div className={style.btns}>
                        <a className={style.btn} href={props.rec}>
                            Información del cuadro
                        </a>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;
