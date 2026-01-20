/**
 * EXERCISE 2: Daily Horoscope Fetcher (Medium)
 * 
 * PROBLEM STATEMENT:
 * Create a component that fetches and displays daily horoscopes for different 
 * zodiac signs. Simulate an API call with a delay and handle loading/error states.
 * 
 * REQUIREMENTS:
 * 1. Dropdown to select a zodiac sign
 * 2. Fetch horoscope when sign changes
 * 3. Show loading spinner while fetching
 * 4. Display the horoscope prediction once loaded
 * 5. Handle and display errors gracefully
 * 6. Add a "Refresh" button to re-fetch
 * 7. Randomly simulate a 20% error rate to test error handling
 * 
 * SKILLS TESTED:
 * - useEffect with dependencies
 * - Async/await
 * - Loading states
 * - Error handling
 * - Cleanup (if user changes selection during fetch)
 * 
 * TIME ESTIMATE: 30 minutes
 */

import { useState, useEffect } from 'react';

// Simulated horoscope data
const horoscopeDatabase = {
  aries: 'Today brings new opportunities for leadership. Trust your instincts and take bold action.',
  taurus: 'Financial matters require your attention. A practical approach will yield positive results.',
  gemini: 'Communication is highlighted. Express yourself clearly and listen to others with an open mind.',
  cancer: 'Focus on home and family. Nurturing relationships will bring emotional fulfillment.',
  leo: 'Your creativity shines bright today. Share your talents and bask in the appreciation.',
  virgo: 'Organization and attention to detail will solve a lingering problem. Trust your analytical mind.',
  libra: 'Relationships take center stage. Seek balance and harmony in your interactions.',
  scorpio: 'Deep transformation is occurring. Embrace change and release what no longer serves you.',
  sagittarius: 'Adventure calls! Expand your horizons through learning or travel.',
  capricorn: 'Career goals come into focus. Your hard work is about to pay off significantly.',
  aquarius: 'Innovation and friendship bring joy. Connect with like-minded individuals.',
  pisces: 'Intuition is heightened. Pay attention to your dreams and inner guidance.',
};

// Simulate API call with delay and random errors
function fetchHoroscope(sign) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate 20% error rate
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch horoscope. Please try again.'));
      } else {
        resolve({
          sign: sign,
          date: new Date().toLocaleDateString(),
          prediction: horoscopeDatabase[sign],
        });
      }
    }, 1500); // 1.5 second delay to simulate network
  });
}

function HoroscopeFetcher() {
  // TODO: Add state for selected sign, horoscope data, loading, and error

  // TODO: Implement useEffect to fetch horoscope when sign changes
  // Remember to handle loading and error states

  // TODO: Implement refresh functionality

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🔮 Daily Horoscope</h1>

      {/* TODO: Add zodiac sign selector dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="zodiac-select" style={{ marginRight: '10px' }}>
          Select your sign:
        </label>
        {/* Create a select element with all zodiac signs */}
      </div>

      {/* TODO: Add refresh button */}

      {/* TODO: Show loading state */}

      {/* TODO: Show error message if error occurred */}

      {/* TODO: Display horoscope when loaded */}

    </div>
  );
}

export default HoroscopeFetcher;

/**
 * EXPECTED BEHAVIOR:
 * - Selecting a sign shows loading for 1.5 seconds
 * - Horoscope appears after loading
 * - Sometimes an error appears (20% chance)
 * - Refresh button re-fetches the horoscope
 * - Changing sign mid-fetch should handle properly
 */
