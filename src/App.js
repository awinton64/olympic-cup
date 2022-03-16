import { useState } from "react"
import './App.css';
import DescriptionContainer from './components/DescriptionContainer';
import FilterArea from "./components/FilterArea";
import GameContainer from './components/GameContainer';


function App() {

const miniGameCards = [
  { id: 1, 
    name: "Team Rock Paper Scissor", 
    description: "Decide with your team what you will throw. Everyone on your team must throw the same thing. First team to win 2 out of 3 throws, wins.", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 2, 
    name: "Group Ninja (hands only)", 
    description: "Everyone starts in the middle with their hands in front of them. On the count of 3 yells “ninja” and everyone jumps backward. Starting with you and going clockwise, take turns taking shots at the other team’s hands. If you get hit once, you’re out! Last team standing wins.", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 3, 
    name: "Throwing Numbers", 
    description: "On the count of three everyone throws out a number 0-5 with their hand. Add up the total number of fingers in the group. Starting with you as “1” go around clockwise counting up to the number. Whoever it lands on, their team wins!", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 4, 
    name: "Red Rover", 
    description: "Each team holds hands to create a wall. The two teams take turns sending someone from the other team over by saying “Red Rover, Red Rover, send (insert name) over!” Your team gets to run first. The first team to break the wall wins.", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 5, 
    name: "Concentration", 
    description: "You start by saying “Concentration *clap clap* 64 *clap clap* no repeats *clap clap* or hesitations *clap clap* the category is *clap clap* (name a category)”. The first person to repeat or hesitate loses the game for their team.", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 6, 
    name: "Group Darts", 
    description: "Starting with you, take turns throwing darts at the dartboard alternating teams till everyone has gone. Whoever gets closest to the center, their team wins! If playing with 2 darts, remove the dart furthest away from the center to continue throwing.", 
    darts: true, 
    dartBoard: true, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 7, 
    name: "Flip Cup Relay", 
    description: "Each team lines up on opposite sides of the table with one sip of booze in the cup. Starting with your end of the table, race your opponent in a relay-style to drink the booze, then flip the cup to land on the cup’s mouth on the table. The next person on your team can only start drinking when the person before them successfully flipped the cup. First team to finish wins!", 
    darts: false, 
    dartBoard: false, 
    soloCups: true, 
    pongBalls: false, 
    bats: false,
  },
  { id: 8, 
    name: "Dizzy Bat Relay",
    description: "Start with one pitcher and one batter on each team. The rest of the team lines up behind the pitcher. On the count of three, each batter takes three sips then three spins around the dizzy bat. Then each pitcher throws an empty can to the batter, and the batter tries to hit it. Keep going until the batter makes a hit. When the batter makes a hit, they retrieve the can and give it to the next pitcher. Then, the person who just pitched becomes the batter. Keep going until everyone on the team has made a hit. The first team to finish wins!", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: true,
  },
  { id: 9, 
    name: "Cup Catch Relay", 
    description: "One person holds the cup, another holds a pong ball for each team about 6ft apart. The ball holder keeps trying to throw the ball into the cup until they make it then becomes the cup holder. First team to have everyone make the ball into the cup wins.", 
    darts: false, 
    dartBoard: false, 
    soloCups: true, 
    pongBalls: true, 
    bats: false,
  },
]
//When adding or editing the orginal make a copy and replace the clone version
const [guessCards, setGuessCards] = useState([
  { id: 1, 
    name: "Guess", 
    description: "Guess how old each person in the room was when they had their first kiss", 
    explicit:false
  },
  { id: 2, 
    name: "Guess", 
    description: "Guess how many people each person in the room has kissed romantically in the last year", 
    explicit:false
  },
  { id: 3, 
    name: "Guess", 
    description: "Guess if each person in the room has ever been arrested", 
    explicit:false
  },
  { id: 4, 
    name: "Guess", 
    description: "Guess if each person in the room has ever smoked weed", 
    explicit:false
  },
  { id: 5, 
    name: "Guess", 
    description: "Guess each person in the room’s favorite genre to do it to", 
    explicit:false
  }, 
  { id: 6, 
    name: "Guess", 
    description: "Guess if each person in the room sleeps naked more than half the time", 
    explicit:false
  },
  { id: 7, 
    name: "Guess", 
    description: "Guess if each person in the room has urinated in public", 
    explicit:false
  },
  { id: 8, 
    name: "Guess", 
    description: "Guess if each person in the room is carrying a picture in their wallet", 
    explicit:false
  },
  { id: 9, 
    name: "Guess", 
    description: "Guess what color underwear each person in the room is wearing (if that color appears on their underwear at all, you’re right!)", 
    explicit:false
  },
  { id: 10, 
    name: "Guess", 
    description: "Guess if each person in the room has ever been to a strip club", 
    explicit:false
  },
  { id: 11, 
    name: "Guess", 
    description: "Guess the biggest age difference each person in the room has had with a romantic partner", 
    explicit:false
  },
  { id: 12, 
    name: "Guess", 
    description: "Guess the age each person in the room was the last time they shit themself", 
    explicit:false
  },
  { id: 13, 
    name: "Guess", 
    description: "Guess the age difference of each person in the room’s parents", 
    explicit:false
  },
  { id: 14, 
    name: "Guess", 
    description: "Guess if each person in the room still uses their daddy’s money at the bar", 
    explicit:false
  },
  { id: 15, 
    name: "Guess", 
    description: "Guess if each person in the room has a tattoo", 
    explicit:false
  },
  { id: 16, 
    name: "Guess", 
    description: "Guess each person in the room’s favorite sex position", 
    explicit:true
  },
  { id: 17, 
    name: "Guess", 
    description: "Guess if each person in the room has made a sex tape", 
    explicit:true
  },
  { id: 18, 
    name: "Guess", 
    description: "Guess if each person in the room has ever sent a nude", 
    explicit:true
  },
  { id: 19, 
    name: "Guess", 
    description: "Guess how many days its been since each person in the room last masterbated", 
    explicit:true
  },
  { id: 20, 
    name: "Guess", 
    description: "Guess if each person in the room has had a romantic partner who is in this room", 
    explicit:true
  },
  { id: 21, 
    name: "Guess", 
    description: "Guess who each person in the room would most want to get with in the room", 
    explicit:true
  },
  { id: 22, 
    name: "Guess", 
    description: "Guess if each person in the room has ever sold alcohol to underage kids", 
    explicit:true
  },
  { id: 23, 
    name: "Guess", 
    description: "Guess if each person in the room prefers boobs or ass", 
    explicit:true
  },
  { id: 24, 
    name: "Guess", 
    description: "Guess if each person in the room is more of a giver or taker sexually", 
    explicit:true
  },
  { id: 25, 
    name: "Guess", 
    description: "Guess if each person in the room prefers to be on the top or bottom", 
    explicit:true
  },
])
const guessCardsClone = [
  { id: 1, 
    name: "Guess", 
    description: "Guess how old each person in the room was when they had their first kiss", 
    explicit:false
  },
  { id: 2, 
    name: "Guess", 
    description: "Guess how many people each person in the room has kissed romantically in the last year", 
    explicit:false
  },
  { id: 3, 
    name: "Guess", 
    description: "Guess if each person in the room has ever been arrested", 
    explicit:false
  },
  { id: 4, 
    name: "Guess", 
    description: "Guess if each person in the room has ever smoked weed", 
    explicit:false
  },
  { id: 5, 
    name: "Guess", 
    description: "Guess each person in the room’s favorite genre to do it to", 
    explicit:false
  }, 
  { id: 6, 
    name: "Guess", 
    description: "Guess if each person in the room sleeps naked more than half the time", 
    explicit:false
  },
  { id: 7, 
    name: "Guess", 
    description: "Guess if each person in the room has urinated in public", 
    explicit:false
  },
  { id: 8, 
    name: "Guess", 
    description: "Guess if each person in the room is carrying a picture in their wallet", 
    explicit:false
  },
  { id: 9, 
    name: "Guess", 
    description: "Guess what color underwear each person in the room is wearing (if that color appears on their underwear at all, you’re right!)", 
    explicit:false
  },
  { id: 10, 
    name: "Guess", 
    description: "Guess if each person in the room has ever been to a strip club", 
    explicit:false
  },
  { id: 11, 
    name: "Guess", 
    description: "Guess the biggest age difference each person in the room has had with a romantic partner", 
    explicit:false
  },
  { id: 12, 
    name: "Guess", 
    description: "Guess the age each person in the room was the last time they shit themself", 
    explicit:false
  },
  { id: 13, 
    name: "Guess", 
    description: "Guess the age difference of each person in the room’s parents", 
    explicit:false
  },
  { id: 14, 
    name: "Guess", 
    description: "Guess if each person in the room still uses their daddy’s money at the bar", 
    explicit:false
  },
  { id: 15, 
    name: "Guess", 
    description: "Guess if each person in the room has a tattoo", 
    explicit:false
  },
  { id: 16, 
    name: "Guess", 
    description: "Guess each person in the room’s favorite sex position", 
    explicit:true
  },
  { id: 17, 
    name: "Guess", 
    description: "Guess if each person in the room has made a sex tape", 
    explicit:true
  },
  { id: 18, 
    name: "Guess", 
    description: "Guess if each person in the room has ever sent a nude", 
    explicit:true
  },
  { id: 19, 
    name: "Guess", 
    description: "Guess how many days its been since each person in the room last masterbated", 
    explicit:true
  },
  { id: 20, 
    name: "Guess", 
    description: "Guess if each person in the room has had a romantic partner who is in this room", 
    explicit:true
  },
  { id: 21, 
    name: "Guess", 
    description: "Guess who each person in the room would most want to get with in the room", 
    explicit:true
  },
  { id: 22, 
    name: "Guess", 
    description: "Guess if each person in the room has ever sold alcohol to underage kids", 
    explicit:true
  },
  { id: 23, 
    name: "Guess", 
    description: "Guess if each person in the room prefers boobs or ass", 
    explicit:true
  },
  { id: 24, 
    name: "Guess", 
    description: "Guess if each person in the room is more of a giver or taker sexually", 
    explicit:true
  },
  { id: 25, 
    name: "Guess", 
    description: "Guess if each person in the room prefers to be on the top or bottom", 
    explicit:true
  },
]
//When adding or editing the orginal make a copy and replace the clone version
const [mysteryCards, setMysteryCards] = useState([
  { id: 1, 
    name: "Arm wrestling", 
    description: "Arm wrestles someone of the other group’s choosing. Loser takes 2 sips.", 
    explicit:false
  },
  { id: 2, 
    name: "Deadfish Contest", 
    description: "Engage in a staring contest with someone of the other group’s choosing. First one to smile or move takes 2 sips.", 
    explicit:false
  },
  { id: 3, 
    name: "How Rich Am I?", 
    description: "The group has one guess to guess how much cash is in your wallet/purse. If they guess correctly, give someone your lowest denomination bill.", 
    explicit:false
  },
  { id: 4, 
    name: "Telephone", 
    description: "If the group successfully passes your message back to you then drink 2 sips.", 
    explicit:false
  },
  { id: 5, 
    name: "Make A Rule", 
    description: "Make a rule that the group must follow. If someone breaks the rule they have to drink. Rule expires at the end of the game.", 
    explicit:false
  }, 
  { id: 6, 
    name: "Death by emoji", 
    description: "Group chooses an emoji for you to send to your most recent school group chat.", 
    explicit:false
  },
  { id: 7, 
    name: "Willy Time", 
    description: "Get a Wet willy ", 
    explicit:false
  },
  { id: 8, 
    name: "Daretastic", 
    description: "Give a dare", 
    explicit:false
  },
  { id: 9, 
    name: "Simon's Trick", 
    description: "Simon Says Party Trick", 
    explicit:false
  },
  { id: 10, 
    name: "First Impression", 
    description: "Everyone shares their first impression about you (the person who pulled the card).", 
    explicit:false
  },
  { id: 11, 
    name: "Search & Read", 
    description: "Group chooses words to search in your text messages. Read the first conversion that pops up.", 
    explicit:false
  },
  { id: 12, 
    name: "Give A Toast", 
    description: "Give a toast, and include 2 words of the group’s choosing.", 
    explicit:false
  },
  { id: 13, 
    name: "Mystery Kiss In The Dark", 
    description: "Player closes their eyes and the group picks one person to give the player a kiss (e.g on the cheek). Player guessed who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  { id: 14, 
    name: "Pants Swap", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 15, 
    name: "Shirt Swap", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 16, 
    name: "Get Slap Mystery", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 17, 
    name: "Story Time 3", 
    description: "Share a story about the best and or worst date you’ve ever been on.", 
    explicit:true
  },
  { id: 18, 
    name: "Story Time", 
    description: "Describe the kinkiest experience you have participate in.", 
    explicit:true
  },
  { id: 19, 
    name: "Full Moon", 
    description: "If you choose to do it pass out 2 shots.", 
    explicit:true
  },
  { id: 20, 
    name: "Story Time 2", 
    description: "Describe the best head you have ever gotten.", 
    explicit:true
  },
  { id: 21, 
    name: "Pressed Ham", 
    description: "Run outside to the closest window and press your bare ass against the window. (If you choose to do it pass out a shot)", 
    explicit:true
  },
  { id: 22, 
    name: "Life's Nectar", 
    description: "If you're a guy, give a Boobloog. If you're a girl, give a belly shot. Group decides who receives it.", 
    explicit:true
  },
  { id: 23, 
    name: "Mystery Doodle", 
    description: "Player closes their eyes and the group picks one person to draw something on the player. Player guesses who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  // { id: 24, 
  //   name: "Guess", 
  //   description: "description", 
  //   explicit:true
  // },
  // { id: 25, 
  //   name: "Guess", 
  //   description: "description", 
  //   explicit:true
  // },
])
const mysteryCardsClone = [
  { id: 1, 
    name: "Arm wrestling", 
    description: "Arm wrestles someone of the other group’s choosing. Loser takes 2 sips.", 
    explicit:false
  },
  { id: 2, 
    name: "Deadfish Contest", 
    description: "Engage in a staring contest with someone of the other group’s choosing. First one to smile or move takes 2 sips.", 
    explicit:false
  },
  { id: 3, 
    name: "How Rich Am I?", 
    description: "The group has one guess to guess how much cash is in your wallet/purse. If they guess correctly, give someone your lowest denomination bill.", 
    explicit:false
  },
  { id: 4, 
    name: "Telephone", 
    description: "If the group successfully passes your message back to you then drink 2 sips.", 
    explicit:false
  },
  { id: 5, 
    name: "Make A Rule", 
    description: "Make a rule that the group must follow. If someone breaks the rule they have to drink. Rule expires at the end of the game.", 
    explicit:false
  }, 
  { id: 6, 
    name: "Death by emoji", 
    description: "Group chooses an emoji for you to send to your most recent school group chat.", 
    explicit:false
  },
  { id: 7, 
    name: "Willy Time", 
    description: "Get a Wet willy ", 
    explicit:false
  },
  { id: 8, 
    name: "Daretastic", 
    description: "Give a dare", 
    explicit:false
  },
  { id: 9, 
    name: "Simon's Trick", 
    description: "Simon Says Party Trick", 
    explicit:false
  },
  { id: 10, 
    name: "First Impression", 
    description: "Everyone shares their first impression about you (the person who pulled the card).", 
    explicit:false
  },
  { id: 11, 
    name: "Search & Read", 
    description: "Group chooses words to search in your text messages. Read the first conversion that pops up.", 
    explicit:false
  },
  { id: 12, 
    name: "Give A Toast", 
    description: "Give a toast, and include 2 words of the group’s choosing.", 
    explicit:false
  },
  { id: 13, 
    name: "Mystery Kiss In The Dark", 
    description: "Player closes their eyes and the group picks one person to give the player a kiss (e.g on the cheek). Player guessed who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  { id: 14, 
    name: "Pants Swap", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 15, 
    name: "Shirt Swap", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 16, 
    name: "Get Slap Mystery", 
    description: "Group picks other person.", 
    explicit:true
  },
  { id: 17, 
    name: "Story Time 3", 
    description: "Share a story about the best and or worst date you’ve ever been on.", 
    explicit:true
  },
  { id: 18, 
    name: "Story Time", 
    description: "Describe the kinkiest experience you have participate in.", 
    explicit:true
  },
  { id: 19, 
    name: "Full Moon", 
    description: "If you choose to do it pass out 2 shots.", 
    explicit:true
  },
  { id: 20, 
    name: "Story Time 2", 
    description: "Describe the best head you have ever gotten.", 
    explicit:true
  },
  { id: 21, 
    name: "Pressed Ham", 
    description: "Run outside to the closest window and press your bare ass against the window. (If you choose to do it pass out a shot)", 
    explicit:true
  },
  { id: 22, 
    name: "Life's Nectar", 
    description: "If you're a guy, give a Boobloog. If you're a girl, give a belly shot. Group decides who receives it.", 
    explicit:true
  },
  { id: 23, 
    name: "Mystery Doodle", 
    description: "Player closes their eyes and the group picks one person to draw something on the player. Player guesses who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  // { id: 24, 
  //   name: "Guess", 
  //   description: "description", 
  //   explicit:true
  // },
  // { id: 25, 
  //   name: "Guess", 
  //   description: "description", 
  //   explicit:true
  // },
]

const [dartsRemoved, setDartsRemoved] = useState(false)
const [cupsRemoved, setCupsRemoved] = useState(false)
const [ballsRemoved, setBallsRemoved] = useState(false)
const [batsRemoved, setBats] = useState(false)

//set the state of the MG filter buttons to true or false
var filterDarts = () => {
  if (dartsRemoved === false) {
    setDartsRemoved(true)
    console.log(dartsRemoved);
  } else if (dartsRemoved === true) {
    setDartsRemoved(false)
    console.log(dartsRemoved);
  } else {
    console.log('error: filterDarts func not working');
  }
}
var filterSoloCups = () => {
  if (cupsRemoved === false) {
    setCupsRemoved(true)
  } else if (cupsRemoved === true) {
    setCupsRemoved(false)
  } else {
    console.log('error: filterSoloCups func not working');
  }
}
var filterPongBalls = () => {
  if (ballsRemoved === false) {
    setBallsRemoved(true)
  } else if (ballsRemoved === true) {
    setBallsRemoved(false)
  } else {
    console.log('error: filterPongBalls func not working');
  }
}
var filterBats = () => {
  if (batsRemoved === false) {
    setBats(true)
  } else if (batsRemoved === true) {
    setBats(false)
  } else {
    console.log('error: filterBats func not working');
  }
}

const [filterExplicitActive, setFilterExplicitActive] = useState(false)
// Let's play a PG-13 game. Create an array with only non-explicit Guess cards & another array with non-explicit Mystery cards. Maybe call this 'removeExplicitCards'
var filterExplicit = () => {
    if (filterExplicitActive === true) {
      // reset the all decks to include all explicit & non-explicit cards
      setGuessCards(guessCardsClone)
      setMysteryCards(mysteryCardsClone)
      setFilterExplicitActive(false)
      console.log('true');
    } else if (filterExplicitActive === false) {
      // remove all explicit cards
      setGuessCards(guessCards.filter((guessCard) => guessCard.explicit === false))
      setMysteryCards(mysteryCards.filter((mysteryCard) => mysteryCard.explicit === false))
      setFilterExplicitActive(true)
      console.log('false');
    } else {
      console.log('error:filterExplicitActive if statement did not work');
    }

    console.log(mysteryCards, guessCards);
    //appears guessCard state is not can not be alterned fast enough before 'guessCards' is console.loged. State was changed when guess card button was pressed.
}

var filteredMiniGameCards

const filterMiniGameCards = () => {

  filteredMiniGameCards = miniGameCards;
  if (dartsRemoved){
    filteredMiniGameCards = filteredMiniGameCards.filter(miniGame => miniGame.darts === false)
  }
  if (cupsRemoved){
    filteredMiniGameCards = filteredMiniGameCards.filter(miniGame => miniGame.soloCups === false)
  }
  if (ballsRemoved){
    filteredMiniGameCards = filteredMiniGameCards.filter(miniGame => miniGame.pongBalls === false)
  }
  if (batsRemoved){
    filteredMiniGameCards = filteredMiniGameCards.filter(miniGame => miniGame.bats === false)
  }
  displayCard(filteredMiniGameCards)
}

//create a func in 'setCardDescription' to randomly return a description from 'guessCards' without repeat 
const displayGuessCard = () => {
  const randomIndex = Math.floor(Math.random() * guessCards.length);
  let lastCard = guessCards[randomIndex].id
  setCardName('')
  setCardName(guessCards[randomIndex].name)
  setCardDescription('')
  setCardDescription(guessCards[randomIndex].description)
  setGuessCards(guessCards.filter((guessCard) => guessCard.id !== lastCard)) //need to add error catch when array is empty
  console.log(guessCards);
}

//create a func in 'setCardDescription' to randomly return a description from 'mysteryCards' without repeat 
const displayMysteryCard = () => {
  const randomIndex = Math.floor(Math.random() * mysteryCards.length);
  let lastCard = mysteryCards[randomIndex].id
  setCardName('')
  setCardName(mysteryCards[randomIndex].name)
  setCardDescription('')
  setCardDescription(mysteryCards[randomIndex].description)
  setMysteryCards(mysteryCards.filter((mysteryCard) => mysteryCard.id !== lastCard))
  console.log(mysteryCards);
}

const [cardDescription, setCardDescription] = useState('Description will show here')
const [cardName, setCardName] = useState('Card Name will show here')

//display miniGame Cards
const displayCard = (filteredDeck) => {
  const randomIndex = Math.floor(Math.random() * filteredDeck.length);
  setCardName('')
  setCardName(filteredDeck[randomIndex].name)
  setCardDescription('')
  setCardDescription(filteredDeck[randomIndex].description)
  console.log(filteredDeck);
}

  return (
    <div className="app">      
      <h1>The Olympic Cup @ Winton's World</h1>
      <DescriptionContainer/>
      <FilterArea 
        guessCards={guessCards}
        filterExplicit={filterExplicit}
        filterDarts={filterDarts}
        // filterDartBoard={filterDartBoard}
        filterSoloCups={filterSoloCups}
        filterPongBalls={filterPongBalls}
        filterBats={filterBats}
      />
      <GameContainer
        cardName={cardName}
        cardDescription={cardDescription}
        filterMiniGameCards={filterMiniGameCards}
        displayGuessCard={displayGuessCard}
        displayMysteryCard={displayMysteryCard}
      />
    </div>
  );
}

export default App;