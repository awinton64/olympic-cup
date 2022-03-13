import { useState } from "react"

const GameContainer = ({filterMiniGameCards, displayGuessCard, displayMysteryCard, cardText}) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className={isActive ? 'grid-container-game fullscreen': 'grid-container-game'}>
            <div className='card-display' onClick={toggleClass} id='cardTextDisplay'>Your card: {cardText}</div>
            <div className='grid-container-game-btn-nested'>
                <button className='button' style={{ color: 'white'}} onClick={filterMiniGameCards}>MiniGame</button>
                <button className='button'style={{ color: 'white'}} onClick={displayGuessCard}>Guess</button>
                <button className='button'style={{ color: 'white'}} onClick={displayMysteryCard}>Mystery</button>
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