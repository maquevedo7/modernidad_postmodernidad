import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'
import challenges from '../../data/data.json'

function Cards() {
    return (
        <div className={style.cardsContainer}>

            {
                challenges.map((challenge) =>

                <Card props={challenge}/>

                )
            }
            
        </div>
    )
}

export default Cards
