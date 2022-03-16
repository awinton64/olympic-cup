import { useState } from "react"

const GameContainer = ({filterMiniGameCards, displayGuessCard, displayMysteryCard, cardDescription, cardName}) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className={isActive ? 'grid-container-game fullscreen': 'grid-container-game'}>
            <div className='card-display' onClick={toggleClass} id='cardTextDisplay'>
                <div className='name'>{cardName}</div>
                <div className='description'> {cardDescription}</div>
            </div>
            <div className='grid-container-game-btn-nested'>
                <button className='button miniGame-btn' onClick={filterMiniGameCards}>MiniGame (G)</button>
                <button className='button guess-btn' onClick={displayGuessCard}>Guess (?)</button>
                <button className='button mystery-btn' onClick={displayMysteryCard}>Mystery (M)</button>
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