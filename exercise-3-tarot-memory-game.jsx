/**
 * EXERCISE 3: Tarot Card Memory Game (Medium-Hard)
 * 
 * PROBLEM STATEMENT:
 * Create a memory matching game using tarot card pairs. Players flip two cards 
 * at a time to find matching pairs. Track moves, matches, and game completion.
 * 
 * REQUIREMENTS:
 * 1. Display 12 cards (6 pairs) face-down initially
 * 2. Click a card to flip it face-up
 * 3. Allow flipping a second card
 * 4. If cards match, keep them face-up
 * 5. If cards don't match, flip both back after 1 second
 * 6. Prevent flipping more than 2 cards at once
 * 7. Track number of moves (pairs of flips)
 * 8. Show "You Won!" message when all pairs are found
 * 9. Add a "Reset Game" button
 * 10. Shuffle cards on game start/reset
 * 
 * SKILLS TESTED:
 * - Complex state management (multiple related states)
 * - Array manipulation and shuffling
 * - Timeouts and async state updates
 * - Game logic and rules
 * - CSS styling (card flip effect)
 * 
 * TIME ESTIMATE: 45-50 minutes
 */

import { useState, useEffect } from 'react';

// Tarot cards for the game (using emojis for simplicity)
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
  // TODO: Create pairs (duplicate each card)
  // TODO: Add unique IDs to each card instance
  // TODO: Shuffle the array
  // Hint: You can use Math.random() - 0.5 with sort for simple shuffling
  return [];
}

function TarotMemoryGame() {
  // TODO: Set up state variables:
  // - cards array
  // - flipped card indices
  // - matched card IDs
  // - number of moves
  // - game won status

  // TODO: Initialize game on mount

  // TODO: Handle card click
  // - Check if card is already flipped or matched
  // - Flip the card
  // - Check for match if two cards are flipped

  // TODO: Check for match logic
  // - If cards match, add to matched set
  // - If cards don't match, flip them back after delay
  // - Increment moves counter

  // TODO: Check for game completion

  // TODO: Reset game function

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🎴 Tarot Memory Game</h1>

      {/* TODO: Display game stats */}
      <div style={{ marginBottom: '20px' }}>
        <p>Moves: {/* move count */}</p>
      </div>

      {/* TODO: Display grid of cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        maxWidth: '400px',
        margin: '0 auto 20px'
      }}>
        {/* Map through cards and render each one */}
      </div>

      {/* TODO: Show win message */}

      {/* TODO: Reset button */}
      <button onClick={/* reset function */} style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Reset Game
      </button>
    </div>
  );
}

export default TarotMemoryGame;

/**
 * EXPECTED BEHAVIOR:
 * - Cards start face-down
 * - Click reveals card symbol
 * - Click second card reveals it
 * - Matching cards stay revealed
 * - Non-matching cards flip back after 1 second
 * - Can't flip more than 2 cards at once
 * - Moves counter increments
 * - Win message appears when all pairs found
 * - Reset shuffles and starts new game
 */
