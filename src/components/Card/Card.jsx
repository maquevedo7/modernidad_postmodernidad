import style from './Card.module.css'
import React from 'react'

function Card({props}) {
    return (
        <div className={style.cardContainer}>

            <figure>

                <img className={style.front} src={props.img} alt="" />
                
                <figcaption className={style.back}>

                    <div>

                        <h1>{props.title}</h1>
                    
                    </div>

                    <p>{props.description}</p>
                    
                    <div>
                        
                        <a href={props.github}><button className={style.btn}>repository</button></a>

                    </div>
                    <div>

                        <a href={props.deploy}><button className={style.btn}>deploy</button></a>

                    </div>
                </figcaption>     

            </figure>

        </div>
    )
}

export default Card