import { useState, useEffect } from 'react';
import styles from './TarotMemoryGame.module.css';

// Tarot cards for the game
const tarotCards = [
  { id: 1, name: 'The Sun', symbol: '☀️' },
  { id: 2, name: 'The Moon', symbol: '🌙' },
  { id: 3, name: 'The Star', symbol: '⭐' },
  { id: 4, name: 'The World', symbol: '🌍' },
  { id: 5, name: 'The Lovers', symbol: '💕' },
  { id: 6, name: 'The Magician', symbol: '🎩' },
];

// Helper function to create pairs and shuffle
function createGameCards() {
  // Create pairs by duplicating each card
  const pairs = tarotCards.flatMap((card, index) => [
    { ...card, uniqueId: `${card.id}-a`, pairId: card.id },
    { ...card, uniqueId: `${card.id}-b`, pairId: card.id },
  ]);
  
  // Shuffle the array
  return pairs.sort(() => Math.random() - 0.5);
}

function TarotMemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize game on mount
  useEffect(() => {
    setCards(createGameCards());
  }, []);

  // Check for game completion
  useEffect(() => {
    if (cards.length > 0 && matchedIds.size === tarotCards.length) {
      setGameWon(true);
    }
  }, [matchedIds, cards.length]);

  // Handle card click
  const handleCardClick = (index) => {
    // Prevent clicking if:
    // - Card is already flipped
    // - Card is already matched
    // - Two cards are already flipped
    // - Currently checking for match
    if (
      flippedIndices.includes(index) ||
      matchedIds.has(cards[index].pairId) ||
      flippedIndices.length >= 2 ||
      isChecking
    ) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // Check for match if two cards are flipped
    if (newFlippedIndices.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = newFlippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      // Increment moves
      setMoves(moves + 1);

      if (firstCard.pairId === secondCard.pairId) {
        // Match found
        setMatchedIds(new Set([...matchedIds, firstCard.pairId]));
        setFlippedIndices([]);
        setIsChecking(false);
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  // Reset game function
  const resetGame = () => {
    setCards(createGameCards());
    setFlippedIndices([]);
    setMatchedIds(new Set());
    setMoves(0);
    setGameWon(false);
    setIsChecking(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎴 Tarot Memory Game</h1>

      {/* Game stats */}
      <div className={styles.stats}>
        <p className={styles.moves}>Moves: {moves}</p>
      </div>

      {/* Grid of cards */}
      <div className={styles.cardGrid}>
        {cards.map((card, index) => {
          const isFlipped = flippedIndices.includes(index);
          const isMatched = matchedIds.has(card.pairId);
          const showFront = isFlipped || isMatched;

          return (
            <div
              key={card.uniqueId}
              className={`${styles.card} ${showFront ? styles.flipped : ''} ${
                isMatched ? styles.matched : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <span className={styles.symbol}>{card.symbol}</span>
                </div>
                <div className={styles.cardBack}>
                  <span className={styles.backSymbol}>🎴</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Win message */}
      {gameWon && (
        <div className={styles.winMessage}>
          <h2>🎉 You Won! 🎉</h2>
          <p>Completed in {moves} moves!</p>
        </div>
      )}

      {/* Reset button */}
      <button onClick={resetGame} className={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
}

export default TarotMemoryGame;
