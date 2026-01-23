import { useState, useEffect } from 'react';
import styles from './HoroscopeFetcher.module.css';

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

const zodiacSigns = [
  { value: 'aries', label: 'Aries ♈' },
  { value: 'taurus', label: 'Taurus ♉' },
  { value: 'gemini', label: 'Gemini ♊' },
  { value: 'cancer', label: 'Cancer ♋' },
  { value: 'leo', label: 'Leo ♌' },
  { value: 'virgo', label: 'Virgo ♍' },
  { value: 'libra', label: 'Libra ♎' },
  { value: 'scorpio', label: 'Scorpio ♏' },
  { value: 'sagittarius', label: 'Sagittarius ♐' },
  { value: 'capricorn', label: 'Capricorn ♑' },
  { value: 'aquarius', label: 'Aquarius ♒' },
  { value: 'pisces', label: 'Pisces ♓' },
];

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
  const [selectedSign, setSelectedSign] = useState('aries');
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const loadHoroscope = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchHoroscope(selectedSign);
        if (!isCancelled) {
          setHoroscope(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
          setHoroscope(null);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadHoroscope();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isCancelled = true;
    };
  }, [selectedSign]);

  const handleRefresh = () => {
    // Trigger a re-fetch by resetting and setting the same sign
    // This works by temporarily changing the state
    const currentSign = selectedSign;
    setSelectedSign('');
    setTimeout(() => setSelectedSign(currentSign), 0);
  };

  const handleSignChange = (e) => {
    setSelectedSign(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔮 Daily Horoscope</h1>

      <div className={styles.controls}>
        <div className={styles.selectWrapper}>
          <label htmlFor="zodiac-select" className={styles.label}>
            Select your sign:
          </label>
          <select
            id="zodiac-select"
            value={selectedSign}
            onChange={handleSignChange}
            className={styles.select}
            disabled={loading}
          >
            {zodiacSigns.map((sign) => (
              <option key={sign.value} value={sign.value}>
                {sign.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleRefresh}
          className={styles.refreshButton}
          disabled={loading}
        >
          🔄 Refresh
        </button>
      </div>

      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Consulting the stars...</p>
        </div>
      )}

      {error && !loading && (
        <div className={styles.errorContainer}>
          <p className={styles.errorIcon}>⚠️</p>
          <p className={styles.errorMessage}>{error}</p>
          <button onClick={handleRefresh} className={styles.retryButton}>
            Try Again
          </button>
        </div>
      )}

      {horoscope && !loading && !error && (
        <div className={styles.horoscopeCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.signName}>
              {zodiacSigns.find(s => s.value === horoscope.sign)?.label || horoscope.sign}
            </h2>
            <p className={styles.date}>{horoscope.date}</p>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.prediction}>{horoscope.prediction}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HoroscopeFetcher;
