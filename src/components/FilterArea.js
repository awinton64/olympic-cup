import { useState } from "react"
import React from 'react'


const FilterArea = ({filterExplicit, filterDarts, filterSoloCups, filterPongBalls, filterBats}) => {
    const [isActive, setActive] = useState(false);
    const [isActiveDart, setActiveDart] = useState(false);
    // const [isActiveDartBoard, setActiveDartBoard] = useState(false);
    const [isActiveCup, setActiveCup] = useState(false);
    const [isActiveBall, setActiveBall] = useState(false);
    const [isActiveBat, setActiveBat] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    const toggleClassDart = () => {
        setActiveDart(!isActiveDart);
    };

    // const toggleClassDartBoard = () => {
    //     setActiveDartBoard(!isActiveDartBoard);
    // };

    const toggleClassCup = () => {
        setActiveCup(!isActiveCup);
    };

    const toggleClassBall = () => {
        setActiveBall(!isActiveBall);
    };

    const toggleClassBat = () => {
        setActiveBat(!isActiveBat);
    };


    return (
        <div>
            <h3>Filter the game cards using the buttons below (back = active)</h3>
            <div className={isActive ? 'non-explicit-btn': 'explicit-btn'} onClick={function(){ filterExplicit(); toggleClass()}}>Click to activate the PG-13 version!</div>
            <p>Click to grey out the items you do not have.</p>
            <div className='grid-container-gp-btn'>
                <div className={isActiveDart ? 'button-gp-de-selected': 'button-gp'} onClick={function(){ filterDarts(); toggleClassDart()}}>2 Darts + Dartboard</div>
                {/* <div className={isActiveDartBoard ? 'button-gp-de-selected': 'button-gp'} onClick={function(){ filterDartBoard(); toggleClassDartBoard()}}>Dart Board</div> */}
                <div className={isActiveCup ? 'button-gp-de-selected': 'button-gp'} onClick={function(){ filterSoloCups(); toggleClassCup()}}>1 solo cup per player</div>
                <div className={isActiveBall ? 'button-gp-de-selected': 'button-gp'} onClick={function(){ filterPongBalls(); toggleClassBall()}}>2 pong balls</div>
                <div className={isActiveBat ? 'button-gp-de-selected': 'button-gp'} onClick={function(){ filterBats(); toggleClassBat()}}>2 Bats</div>
            </div>
        </div>
        
        
    )
}

export default FilterArea

//non-explicit-btn