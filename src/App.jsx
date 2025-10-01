import { useState } from 'react';
import './App.css';

export default function App() {
  const cardSet = {
    title: "One Piece Knowledge Challenge",
    description: "Test your knowledge about the Mugiwara Pirates to see if you are a true fan!",
    cards: [
      { question: "Who is the captain of the Straw Hat Pirates?", answer: "Monkey D. Luffy" },
      { question: "What is the name of Luffy's signature attack?", answer: "Gum-Gum Pistol" },
      { question: "What Devil Fruit did Luffy eat?", answer: "Gum-Gum Fruit (Gomu Gomu no Mi)" },
      { question: "Who is the man who aims to become the world's greatest swordsman?", answer: "Roronoa Zoro" },
      { question: "What is the name of the Straw Hats' ship?", answer: "Thousand Sunny" },
      { question: "Who is the navigator of the Straw Hat crew?", answer: "Nami" },
      { question: "What is the name of Luffy's grandfather?", answer: "Monkey D. Garp" },
      { question: "Who is the cook of the Straw Hat Pirates?", answer: "Sanji" },
      { question: "What is the One piece?", answer: "Still unknown to this point haha" },
      { question: "Who is the doctor of the Straw Hat crew?", answer: "Tony Tony Chopper" },
      { question: "What is Luffy's bounty after Wano?", answer: "3 billion berries" },
      { question: "Who taught Luffy how to use Haki?", answer: "Silvers Rayleigh" }
    ]
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cardSet.cards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  };

  const currentCard = cardSet.cards[currentIndex];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header-card">
          <h1 className="title">{cardSet.title}</h1>
          <p className="description">{cardSet.description}</p>
          <div className="card-count">
            Total Cards: <span className="count-number">{cardSet.cards.length}</span>
          </div>
        </div>

    
        <div className="flashcard-container">
          <div
            onClick={handleFlip}
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          >
            <div className="card-face card-front">
              <div className="card-label">QUESTION</div>
              <p className="card-text">
                {currentCard.question}
              </p>
              <div className="card-hint">Click to see answer</div>
            </div>

            <div className="card-face card-back">
              <div className="card-label">ANSWER</div>
              <p className="card-text">
                {currentCard.answer}
              </p>
              <div className="card-hint">Click to see question</div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={handleNext}
            className="next-button"
          >
            Next Card (random)
          </button> 
        </div>
      </div>
    </div>
  );
}