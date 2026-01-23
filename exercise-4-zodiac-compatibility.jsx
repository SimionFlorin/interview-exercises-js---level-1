/**
 * EXERCISE 4: Zodiac Sign Compatibility Calculator (Medium)
 * 
 * PROBLEM STATEMENT:
 * Create a form that calculates compatibility between two zodiac signs based on 
 * their elements and qualities. Include validation, detailed results, and 
 * compatibility scoring across multiple dimensions.
 * 
 * REQUIREMENTS:
 * 1. Form with inputs for two birth dates (or direct sign selection)
 * 2. Validate that both dates/signs are provided
 * 3. Calculate compatibility score (0-100)
 * 4. Show detailed breakdown by category:
 *    - Emotional compatibility
 *    - Communication compatibility
 *    - Physical compatibility
 *    - Long-term potential
 * 5. Display element compatibility (Fire, Earth, Air, Water)
 * 6. Show quality compatibility (Cardinal, Fixed, Mutable)
 * 7. Provide a written summary
 * 8. Add a "Clear" button to reset the form
 * 9. Show validation errors appropriately
 * 10. Format the results in an attractive, readable way
 * 
 */

import { useState } from 'react';

// Zodiac sign data
const zodiacData = {
  aries: { element: 'fire', quality: 'cardinal', dates: 'Mar 21 - Apr 19' },
  taurus: { element: 'earth', quality: 'fixed', dates: 'Apr 20 - May 20' },
  gemini: { element: 'air', quality: 'mutable', dates: 'May 21 - Jun 20' },
  cancer: { element: 'water', quality: 'cardinal', dates: 'Jun 21 - Jul 22' },
  leo: { element: 'fire', quality: 'fixed', dates: 'Jul 23 - Aug 22' },
  virgo: { element: 'earth', quality: 'mutable', dates: 'Aug 23 - Sep 22' },
  libra: { element: 'air', quality: 'cardinal', dates: 'Sep 23 - Oct 22' },
  scorpio: { element: 'water', quality: 'fixed', dates: 'Oct 23 - Nov 21' },
  sagittarius: { element: 'fire', quality: 'mutable', dates: 'Nov 22 - Dec 21' },
  capricorn: { element: 'earth', quality: 'cardinal', dates: 'Dec 22 - Jan 19' },
  aquarius: { element: 'air', quality: 'fixed', dates: 'Jan 20 - Feb 18' },
  pisces: { element: 'water', quality: 'mutable', dates: 'Feb 19 - Mar 20' },
};

// Compatibility matrices
const elementCompatibility = {
  fire: { fire: 85, earth: 45, air: 75, water: 40 },
  earth: { fire: 45, earth: 80, air: 50, water: 85 },
  air: { fire: 75, earth: 50, air: 80, water: 55 },
  water: { fire: 40, earth: 85, air: 55, water: 90 },
};

const qualityCompatibility = {
  cardinal: { cardinal: 70, fixed: 60, mutable: 75 },
  fixed: { cardinal: 60, fixed: 85, mutable: 55 },
  mutable: { cardinal: 75, fixed: 55, mutable: 80 },
};

function ZodiacCompatibilityCalculator() {

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>💫 Zodiac Compatibility Calculator</h1>
      
      <form style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="sign1" style={{ display: 'block', marginBottom: '5px' }}>
            First Person's Zodiac Sign:
          </label>
          {/* Add sign selector */}
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="sign2" style={{ display: 'block', marginBottom: '5px' }}>
            Second Person's Zodiac Sign:
          </label>
          {/* Add sign selector */}
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4299e1',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}>
            Calculate Compatibility
          </button>
          
          <button type="button" style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#718096',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}>
            Clear
          </button>
        </div>
      </form>
      
      {/* Display results here */}
      
    </div>
  );
}

export default ZodiacCompatibilityCalculator;

/**
 * EXPECTED BEHAVIOR:
 * - Empty form shows validation errors on submit
 * - Valid submission calculates and displays compatibility
 * - Overall score is prominent
 * - Detailed breakdown shows multiple dimensions
 * - Summary text adapts to compatibility level
 * - Clear button resets everything
 * - Same sign pairing shows high compatibility
 * - Fire + Water shows lower compatibility
 * - Results are visually appealing
 */
