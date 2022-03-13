import { useState } from "react"
import './App.css';
import DescriptionContainer from './components/DescriptionContainer';
import FilterArea from "./components/FilterArea";
import GameContainer from './components/GameContainer';


function App() {

const miniGameCards = [
  { id: 1, 
    name: "Team Rock Paper Scissor", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 2, 
    name: "Group Ninja (hands only)", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 3, 
    name: "Throwing Numbers", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 4, 
    name: "Bang Bang Shoot", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 5, 
    name: "Red Rover", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 6, 
    name: "Concentration", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 7, 
    name: "Group Darts", 
    description: "description", 
    darts: true, 
    dartBoard: true, 
    soloCups: false, 
    pongBalls: false, 
    bats: false,
  },
  { id: 8, 
    name: "Flip Cup Relay", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: true, 
    pongBalls: false, 
    bats: false,
  },
  { id: 9, 
    name: "Dizzy Bat Relay", 
    description: "description", 
    darts: false, 
    dartBoard: false, 
    soloCups: false, 
    pongBalls: false, 
    bats: true,
  },
  { id: 10, 
    name: "Cup Catch Relay", 
    description: "description", 
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
    name: "name", 
    description: "Guess how old each person in the room was when they had their first kiss", 
    explicit:false
  },
  { id: 2, 
    name: "name", 
    description: "Guess how many people each person in the room has kissed romantically in the last year", 
    explicit:false
  },
  { id: 3, 
    name: "name", 
    description: "Guess if each person in the room has ever been arrested", 
    explicit:false
  },
  { id: 4, 
    name: "name", 
    description: "Guess if each person in the room has ever smoked weed", 
    explicit:false
  },
  { id: 5, 
    name: "name", 
    description: "Guess each person in the room’s favorite genre to do it to", 
    explicit:false
  }, 
  { id: 6, 
    name: "name", 
    description: "Guess if each person in the room sleeps naked more than half the time", 
    explicit:false
  },
  { id: 7, 
    name: "name", 
    description: "Guess if each person in the room has urinated in public", 
    explicit:false
  },
  { id: 8, 
    name: "name", 
    description: "Guess if each person in the room is carrying a picture in their wallet", 
    explicit:false
  },
  { id: 9, 
    name: "name", 
    description: "Guess what color underwear each person in the room is wearing (if that color appears on their underwear at all, you’re right!)", 
    explicit:false
  },
  { id: 10, 
    name: "name", 
    description: "Guess if each person in the room has ever been to a strip club", 
    explicit:false
  },
  { id: 11, 
    name: "name", 
    description: "Guess the biggest age difference each person in the room has had with a romantic partner", 
    explicit:false
  },
  { id: 12, 
    name: "name", 
    description: "Guess the age each person in the room was the last time they shit themself", 
    explicit:false
  },
  { id: 13, 
    name: "name", 
    description: "Guess the age difference of each person in the room’s parents", 
    explicit:false
  },
  { id: 14, 
    name: "name", 
    description: "Guess if each person in the room still uses their daddy’s money at the bar", 
    explicit:false
  },
  { id: 15, 
    name: "name", 
    description: "Guess if each person in the room has a tattoo", 
    explicit:false
  },
  { id: 16, 
    name: "name", 
    description: "Guess each person in the room’s favorite sex position", 
    explicit:true
  },
  { id: 17, 
    name: "name", 
    description: "Guess if each person in the room has made a sex tape", 
    explicit:true
  },
  { id: 18, 
    name: "name", 
    description: "Guess if each person in the room has ever sent a nude", 
    explicit:true
  },
  { id: 19, 
    name: "name", 
    description: "Guess how many days its been since each person in the room last masterbated", 
    explicit:true
  },
  { id: 20, 
    name: "name", 
    description: "Guess if each person in the room has had a romantic partner who is in this room", 
    explicit:true
  },
  { id: 21, 
    name: "name", 
    description: "Guess who each person in the room would most want to get with in the room", 
    explicit:true
  },
  { id: 22, 
    name: "name", 
    description: "Guess if each person in the room has ever sold alcohol to underage kids", 
    explicit:true
  },
  { id: 23, 
    name: "name", 
    description: "Guess if each person in the room prefers boobs or ass", 
    explicit:true
  },
  { id: 24, 
    name: "name", 
    description: "Guess if each person in the room is more of a giver or taker sexually", 
    explicit:true
  },
  { id: 25, 
    name: "name", 
    description: "Guess if each person in the room prefers to be on the top or bottom", 
    explicit:true
  },
])
const guessCardsClone = [
  { id: 1, 
    name: "name", 
    description: "Guess how old each person in the room was when they had their first kiss", 
    explicit:false
  },
  { id: 2, 
    name: "name", 
    description: "Guess how many people each person in the room has kissed romantically in the last year", 
    explicit:false
  },
  { id: 3, 
    name: "name", 
    description: "Guess if each person in the room has ever been arrested", 
    explicit:false
  },
  { id: 4, 
    name: "name", 
    description: "Guess if each person in the room has ever smoked weed", 
    explicit:false
  },
  { id: 5, 
    name: "name", 
    description: "Guess each person in the room’s favorite genre to do it to", 
    explicit:false
  }, 
  { id: 6, 
    name: "name", 
    description: "Guess if each person in the room sleeps naked more than half the time", 
    explicit:false
  },
  { id: 7, 
    name: "name", 
    description: "Guess if each person in the room has urinated in public", 
    explicit:false
  },
  { id: 8, 
    name: "name", 
    description: "Guess if each person in the room is carrying a picture in their wallet", 
    explicit:false
  },
  { id: 9, 
    name: "name", 
    description: "Guess what color underwear each person in the room is wearing (if that color appears on their underwear at all, you’re right!)", 
    explicit:false
  },
  { id: 10, 
    name: "name", 
    description: "Guess if each person in the room has ever been to a strip club", 
    explicit:false
  },
  { id: 11, 
    name: "name", 
    description: "Guess the biggest age difference each person in the room has had with a romantic partner", 
    explicit:false
  },
  { id: 12, 
    name: "name", 
    description: "Guess the age each person in the room was the last time they shit themself", 
    explicit:false
  },
  { id: 13, 
    name: "name", 
    description: "Guess the age difference of each person in the room’s parents", 
    explicit:false
  },
  { id: 14, 
    name: "name", 
    description: "Guess if each person in the room still uses their daddy’s money at the bar", 
    explicit:false
  },
  { id: 15, 
    name: "name", 
    description: "Guess if each person in the room has a tattoo", 
    explicit:false
  },
  { id: 16, 
    name: "name", 
    description: "Guess each person in the room’s favorite sex position", 
    explicit:true
  },
  { id: 17, 
    name: "name", 
    description: "Guess if each person in the room has made a sex tape", 
    explicit:true
  },
  { id: 18, 
    name: "name", 
    description: "Guess if each person in the room has ever sent a nude", 
    explicit:true
  },
  { id: 19, 
    name: "name", 
    description: "Guess how many days its been since each person in the room last masterbated", 
    explicit:true
  },
  { id: 20, 
    name: "name", 
    description: "Guess if each person in the room has had a romantic partner who is in this room", 
    explicit:true
  },
  { id: 21, 
    name: "name", 
    description: "Guess who each person in the room would most want to get with in the room", 
    explicit:true
  },
  { id: 22, 
    name: "name", 
    description: "Guess if each person in the room has ever sold alcohol to underage kids", 
    explicit:true
  },
  { id: 23, 
    name: "name", 
    description: "Guess if each person in the room prefers boobs or ass", 
    explicit:true
  },
  { id: 24, 
    name: "name", 
    description: "Guess if each person in the room is more of a giver or taker sexually", 
    explicit:true
  },
  { id: 25, 
    name: "name", 
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
    name: "Deadfish contest", 
    description: "Engage in a staring contest with someone of the other group’s choosing. First one to smile or move takes 2 sips.", 
    explicit:false
  },
  { id: 3, 
    name: "How rich am I?", 
    description: "The group has one guess to guess how much cash is in your wallet/purse. If they guess correctly, give someone your lowest denomination bill.", 
    explicit:false
  },
  { id: 4, 
    name: "Telephone", 
    description: "If the group successfully passes your message back to you then drink 2 sips.", 
    explicit:false
  },
  { id: 5, 
    name: "cardName", 
    description: "Make a rule", 
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
    name: "First impression", 
    description: "Everyone shares their first impression about you (the person who pulled the card).", 
    explicit:false
  },
  { id: 11, 
    name: "Search & read", 
    description: "Group chooses words to search in your text messages. Read the first conversion that pops up.", 
    explicit:false
  },
  { id: 12, 
    name: "Give a toast", 
    description: "Give a toast, and include 2 words of the group’s choosing.", 
    explicit:false
  },
  { id: 13, 
    name: "Mystery kiss in the dark", 
    description: "Player closes their eyes and the group picks one person to give the player a kiss (e.g on the cheek). Player guessed who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  { id: 14, 
    name: "Pants swap", 
    description: "Group picks other person", 
    explicit:true
  },
  { id: 15, 
    name: "Shirt Swap", 
    description: "Group picks other person", 
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
    description: "Describe the kinkiest experience you have participate in", 
    explicit:true
  },
  { id: 19, 
    name: "Full Moon", 
    description: "If you choose to do it pass out 2 shots", 
    explicit:true
  },
  { id: 20, 
    name: "Story Time 2", 
    description: "Describe the best head you have ever gotten", 
    explicit:true
  },
  { id: 21, 
    name: "Pressed ham", 
    description: "Run outside to the closest window and press your bare ass against the window. (if you choose to do it pass out a shot)", 
    explicit:true
  },
  { id: 22, 
    name: "Life's Nectar", 
    description: "If you're a guy, give a Boobloog. If you're a girl, give a belly shot. Group decides who receives it.", 
    explicit:true
  },
  { id: 23, 
    name: "Mystery Doodle", 
    description: "Group picks other person", 
    explicit:true
  },
  // { id: 24, 
  //   name: "name", 
  //   description: "description", 
  //   explicit:true
  // },
  // { id: 25, 
  //   name: "name", 
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
    name: "Deadfish contest", 
    description: "Engage in a staring contest with someone of the other group’s choosing. First one to smile or move takes 2 sips.", 
    explicit:false
  },
  { id: 3, 
    name: "How rich am I?", 
    description: "The group has one guess to guess how much cash is in your wallet/purse. If they guess correctly, give someone your lowest denomination bill.", 
    explicit:false
  },
  { id: 4, 
    name: "Telephone", 
    description: "If the group successfully passes your message back to you then drink 2 sips.", 
    explicit:false
  },
  { id: 5, 
    name: "cardName", 
    description: "Make a rule", 
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
    name: "First impression", 
    description: "Everyone shares their first impression about you (the person who pulled the card).", 
    explicit:false
  },
  { id: 11, 
    name: "Search & read", 
    description: "Group chooses words to search in your text messages. Read the first conversion that pops up.", 
    explicit:false
  },
  { id: 12, 
    name: "Give a toast", 
    description: "Give a toast, and include 2 words of the group’s choosing.", 
    explicit:false
  },
  { id: 13, 
    name: "Mystery kiss in the dark", 
    description: "Player closes their eyes and the group picks one person to give the player a kiss (e.g on the cheek). Player guessed who it was and if the player is right then the group drinks if the player is wrong then the player drinks.", 
    explicit:true
  },
  { id: 14, 
    name: "Pants swap", 
    description: "Group picks other person", 
    explicit:true
  },
  { id: 15, 
    name: "Shirt Swap", 
    description: "Group picks other person", 
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
    description: "Describe the kinkiest experience you have participate in", 
    explicit:true
  },
  { id: 19, 
    name: "Full Moon", 
    description: "If you choose to do it pass out 2 shots", 
    explicit:true
  },
  { id: 20, 
    name: "Story Time 2", 
    description: "Describe the best head you have ever gotten", 
    explicit:true
  },
  { id: 21, 
    name: "Pressed ham", 
    description: "Run outside to the closest window and press your bare ass against the window. (if you choose to do it pass out a shot)", 
    explicit:true
  },
  { id: 22, 
    name: "Life's Nectar", 
    description: "If you're a guy, give a Boobloog. If you're a girl, give a belly shot. Group decides who receives it.", 
    explicit:true
  },
  { id: 23, 
    name: "Mystery Doodle", 
    description: "Group picks other person", 
    explicit:true
  },
  // { id: 24, 
  //   name: "name", 
  //   description: "description", 
  //   explicit:true
  // },
  // { id: 25, 
  //   name: "name", 
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

//create a func in 'setCardText' to randomly return a description from 'guessCards' without repeat 
const displayGuessCard = () => {
  const randomIndex = Math.floor(Math.random() * guessCards.length);
  let lastCard = guessCards[randomIndex].id
  setCardText('')
  setCardText(guessCards[randomIndex].description)
  setGuessCards(guessCards.filter((guessCard) => guessCard.id !== lastCard)) //need to add error catch when array is empty
  console.log(guessCards);
}

//create a func in 'setCardText' to randomly return a description from 'mysteryCards' without repeat 
const displayMysteryCard = () => {
  const randomIndex = Math.floor(Math.random() * mysteryCards.length);
  let lastCard = mysteryCards[randomIndex].id
  setCardText('')
  setCardText(mysteryCards[randomIndex].description)
  setMysteryCards(mysteryCards.filter((mysteryCard) => mysteryCard.id !== lastCard))
  console.log(mysteryCards);
}

const [cardText, setCardText] = useState('Descripton')

const displayCard = (filteredDeck) => {
  const randomIndex = Math.floor(Math.random() * filteredDeck.length);
  setCardText('')
  setCardText(filteredDeck[randomIndex].name)
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
        cardText={cardText}
        filterMiniGameCards={filterMiniGameCards}
        displayGuessCard={displayGuessCard}
        displayMysteryCard={displayMysteryCard}
      />
    </div>
  );
}

export default App;