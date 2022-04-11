import { useState } from "react"
import React from 'react'

const DescriptionContainer = () => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    function toggleVisibility() {
        setDescriptionExpanded(!descriptionExpanded)
    }

    return (
        <div className='flex-container'>
            <h3>3 things you need to know to start</h3>
            <ol>
                <li><i>Mini Games (G):</i> 2 teams (3v3 or 4v4) compete in mini games to win gold medals. The first team to win 7 gold medals wins the game.</li>
                <li><i>Guess Cards (?):</i> If a player lands on a guess card the player will guess the card about everyone in the room with a yes or no response. If the player guesses correctly the responder drinks if the player guesses incorrectly the player drinks.</li>
                <li><i>Mystery Cards (M):</i> If a player lands on a mystery card then the player does as the card says or says ‘pass’ and drinks instead.</li>
            </ol>
            <h3>3 materials required to start</h3>
            <ol>
                <li>The game board (learn <span style={{ color:'red'}}>how to make the board</span> below)</li>
                <li>2 game pieces one for each team (e.g a dime &amp; a pennie)</li>
                <li>A smart phone or computer with internet access</li>
            </ol>
            <div onClick={toggleVisibility} style={{ color:'blue'}}>
                <p><i>Click here to read more &amp; learn <span style={{ color:'red'}}>how to make the board.</span> </i></p>
            </div>
            <div className={descriptionExpanded ? null:'hidden'}>
                <h3>How to make the board?</h3>
                <img src={process.env.PUBLIC_URL + "/Board.png"} width="500" alt="board" />

                <ol>
                    <li>Take a piece of paper and pen and draw one large circle with a smaller circle inside.</li>
                    <li>Draw two lines to split the board into four quadrants.</li>
                    <li>In each quadrant, draw 7 lines to create 8 spots for a total of 32 spots on the board.</li>
                    <li>Start with the game spot directly to the right at 12 O'clock moving counterclockwise following the pattern “G” for mini game “M” for mystery “G” for mini game “?” for guess with one symbol in each spot.</li>
                    <li>On the board’s 12 &amp; 6 O'clock line write the word “Team Shot”.</li>
                    <li>On the spot directly to the left at 12 O'clock write “Thunder-start”.</li>
                    <li>That’s it! You’ve made a game board of your own!</li>
                </ol>
                <h3>How do you play Thunderstruck?</h3>
                    <p>You give all the players a drink, have them stand in a circle and start listening to AC/DC's Thunderstruck. The first time you hear 'Thunder', the first person starts drinking. The next time you hear 'thunder,' the person drinking stops, and the person to their left begins.</p>
                <h3>Purpose of the game?</h3>
                    <p>The olympic cup is nothing more than an opportunity to get to know others better through a shared experience.</p>
                <h3>How do you win?</h3>
                    <p>The first team to win 7 gold medals wins. Gold medals can be won in mini games or when your team’s piece passes Thunder-Start.</p>
                <h3>Who’s the game for?</h3>
                    <p>The Olympic Cup is for those who love mini games, questions, and learning about others.</p>
                <h3>When should the game be played?</h3>
                    <p>The olympic cup was designed to be played the second half of an hour and half pregame, but it can be played whenever you want!</p>
                <h3>How long should the Olympic Cup take?</h3>
                    <p>The game was designed to take an average of 45 minutes. Once you know how to play the mini games should take on average 2 minutes and the guess and mystery cards 1 minute. </p>
                    <h3>Other rules</h3>
                <ul>
                    <li>Each team places their game piece on Thunder-Struck and begins the game by playing Thunderstruck (first team to have a player to finish their drink goes first) or rolling the die (team with the highest number goes first).</li>
                    <li>Each team alternates turns rolling a die to move their team's game piece counter clockwise around the board. Players on the same team should take turns rolling the die when it’s their team's turn to roll.</li>
                    <li>Everytime your team’s piece passes 12 or 6 O'clock on the board everyone on your team takes a shot.</li>
                    <li>Everytime your team’s piece passes, Thunder-struck automatically wins a gold medal for your team.</li>
                </ul>
                <p>Have suggestions or questions on how to make the game better email us at theolympiccup@gmail.com</p>
                <p><i>**WARNING: THIS GAME IS FOR AGES 21+. ALL PARTICIPATING PARTIES EXCEPT FULL RESPONSIBILITY FOR ANY INJURY OR DEATH**</i></p>
                <div onClick={toggleVisibility} style={{ color:'blue'}}>
                <p><i>Click here to read less.</i></p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionContainer


//onClick={toggleVisibility()}
//className={descriptionExpanded ? 'hidden':null}