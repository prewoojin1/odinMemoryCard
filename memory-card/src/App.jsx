import { useState, useEffect } from 'react';
import Card from './components/Card';
import getPokemonCards from "./getPokemonCards"

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getPokemonCards();
      setCards(data);
    }
    loadData();
  }, []);

  const shuffleCards = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleClickCard = (id) => {
    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
    } else {
      const nextScore = score + 1;
      setScore(nextScore);
      setClickedIds([...clickedIds, id])

      if (nextScore > bestScore) {
        setBestScore(nextScore)
      }
    }

    setCards((prevCards) => shuffleCards(prevCards))
  }



  return(
    <div className="App">
      <h1>Memory Card Game</h1>
      <div>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      <Card cards={cards} onClickCard={handleClickCard}/>
    </div>
  )
}

export default App;