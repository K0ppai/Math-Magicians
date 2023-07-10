import React, { useEffect, useState } from 'react';
import '../styles/quote.css';

function Quote() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const req = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': 'SGjZWVibAPXyRKowk2HlGg==4v0H284fc9PGWwt3',
          },
        });
        const res = await req.json();
        setQuote(res[0].quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="quote">Loading...</h1>
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <h1 className="quote">Something went wrong...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="quote">{quote}</h1>
    </div>
  );
}

export default Quote;
