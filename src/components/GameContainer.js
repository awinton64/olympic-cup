import { useState } from "react"
import React from 'react'

const GameContainer = ({filterMiniGameCards, displayGuessCard, displayMysteryCard, cardDescription, cardName}) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
    
    const [dice, setDice] = useState('Roll Die');

    const rollDice = () => {
        setDice('Rolling...')
        
        setTimeout(function() {
                const rndInt = Math.floor(Math.random() * 6) + 1
                setDice(rndInt)  
            }, 1000);
    }


    return (
        <div>
        <div className={isActive ? 'grid-container-game fullscreen': 'grid-container-game'}>
            <div className='card-display' onClick={toggleClass} id='cardTextDisplay'>
                <div className='name'>{cardName}</div>
                <div className='description'> {cardDescription}</div>
            </div>
            <div className='grid-container-game-btn-nested'>
                <button className='button miniGame-btn' onClick={filterMiniGameCards}>MiniGame (G)</button>
                <button className='button guess-btn' onClick={displayGuessCard}>Guess (?)</button>
                <button className='button mystery-btn' onClick={displayMysteryCard}>Mystery (M)</button>
                <button className='button dice-btn' onClick={rollDice}>{dice}</button>
            </div>
        </div>
        </div>
    )
}
 
export default GameContainer

// https://stackoverflow.com/questions/6384304/styling-buttons-with-css button



// const [isActive, setActive] = useState(false);

// const toggleClass = () => {
//   setActive(!isActive);
// };

// className={isActive ? 'classTwo': 'classOne'} onClick={toggleClass}