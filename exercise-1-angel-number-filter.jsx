/**
 * EXERCISE 1: Angel Number Filter (Easy)
 * 
 * PROBLEM STATEMENT:
 * Create a component that displays a list of angel numbers and allows users to 
 * filter them by searching for specific numbers or keywords in their meanings.
 * 
 * REQUIREMENTS:
 * 1. Display all angel numbers by default
 * 2. Provide a search input that filters the list in real-time
 * 3. Search should work for both the number itself and the meaning text
 * 4. Show a "No results" message when no matches are found
 * 5. Make the search case-insensitive
 * 6. Display the count of filtered results
 * 
 * SKILLS TESTED:
 * - useState for managing search input
 * - Array filtering
 * - Conditional rendering
 * - Event handling
 * - String manipulation
 * 
 * TIME ESTIMATE: 15-20 minutes
 */

import { useState } from 'react';

// Sample data - In the real project, this comes from Supabase
const angelNumbersData = [
  { number: '111', meaning: 'New beginnings, manifestation, and alignment with your highest self. The universe is supporting your thoughts becoming reality.' },
  { number: '222', meaning: 'Balance, harmony, and trust. Everything is working out for your highest good, even if you cannot see it yet.' },
  { number: '333', meaning: 'Divine protection and guidance. The ascended masters are near you, supporting and guiding your path.' },
  { number: '444', meaning: 'Stability and foundation. Your angels are surrounding you with love and support. You are on the right path.' },
  { number: '555', meaning: 'Major life changes and transformation. Embrace the shifts happening in your life with an open heart.' },
  { number: '666', meaning: 'Refocus on spiritual matters. Release material worries and trust that your needs will be met.' },
  { number: '777', meaning: 'Spiritual awakening and enlightenment. You are aligned with your divine purpose.' },
  { number: '888', meaning: 'Abundance and financial prosperity. The universe is rewarding your hard work and positive actions.' },
  { number: '999', meaning: 'Completion and closure. One chapter is ending to make way for new beginnings.' },
  { number: '000', meaning: 'Infinite potential and connection to the divine source. You are one with the universe.' },
];

function AngelNumberFilter() {
  // TODO: Add state for search input

  // TODO: Filter the angel numbers based on search input
  // Hint: Use array.filter() and string.includes() or string.toLowerCase()

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🌟 Angel Numbers Guide</h1>

      {/* TODO: Add search input */}
      {/* Hint: Use onChange event and value prop */}

      {/* TODO: Display count of filtered results */}

      {/* TODO: Display filtered angel numbers */}
      {/* Hint: Use map() to render each number */}

      {/* TODO: Show "No results" message when filtered list is empty */}

    </div>
  );
}

export default AngelNumberFilter;

/**
 * EXPECTED BEHAVIOR:
 * - Typing "111" shows only that number
 * - Typing "abundance" shows 888
 * - Typing "new" shows 111 and 999
 * - Empty search shows all numbers
 * - Counter updates as you type
 */
