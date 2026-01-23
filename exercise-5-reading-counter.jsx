/**
 * EXERCISE 5: Real-time Reading Counter (Advanced)
 * 
 * PROBLEM STATEMENT:
 * Create a component that simulates a reading time tracker for spiritual articles.
 * Track how long a user has been reading, update in real-time, handle pause/resume,
 * and properly cleanup intervals to avoid memory leaks.
 * 
 * REQUIREMENTS:
 * 1. Article selector dropdown from the provided data
 * 2. Timer that counts up in seconds, displayed in MM:SS format
 * 3. Timer starts automatically when an article is selected
 * 4. Pause/Resume button to control the timer
 * 5. Progress bar showing estimated reading progress (based on word count and average reading speed)
 * 6. Reading statistics panel showing:
 *    - Time spent reading
 *    - Estimated progress percentage
 *    - Estimated words read
 *    - Current reading speed (words per minute)
 * 7. "Finish Reading" button that stops timer and saves session to history
 * 8. Reading history section displaying past sessions
 * 9. Proper cleanup of intervals on component unmount (no memory leaks)
 * 10. Confirmation prompt when switching articles with an active reading session
 * 11. Browser warning (beforeunload) when trying to close with active session
 * 
 */

import { useState, useEffect, useRef } from 'react';

// Sample articles
const articles = [
  { id: 1, title: 'Understanding Angel Numbers', wordCount: 1200, category: 'Spirituality' },
  { id: 2, title: 'Tarot Reading for Beginners', wordCount: 1800, category: 'Tarot' },
  { id: 3, title: 'Zodiac Signs and Relationships', wordCount: 2400, category: 'Astrology' },
  { id: 4, title: 'Meditation Techniques for Inner Peace', wordCount: 1500, category: 'Wellness' },
];

// Average reading speed in words per minute
const AVERAGE_READING_SPEED = 200;

function ReadingCounter() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📖 Reading Time Tracker</h1>
      
      {/* Implement your solution here */}
      
    </div>
  );
}

export default ReadingCounter;

/**
 * EXPECTED BEHAVIOR:
 * - Selecting an article starts the timer automatically
 * - Timer counts up every second in MM:SS format
 * - Pause stops the timer, resume continues from same point
 * - Progress bar fills based on estimated reading time vs elapsed time
 * - Statistics update in real-time
 * - Finish Reading stops timer and saves session to history
 * - Changing articles prompts to save or discard current session
 * - No memory leaks (interval is properly cleaned up on unmount)
 * - Browser warns if trying to close tab with active reading session
 */
