import React, {useState, useEffect} from 'react';

const url = "https://type.fit/api/quotes";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setQuotes(data))
  }, []);

  const handleClick = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }
  }

  return (
    <div className='quotes'>
      <p>{currentQuote.text}</p>
      <h2>
      {currentQuote.author}
      </h2>
      <button className='btn' onClick={handleClick}>Get Random Quote</button>
    </div>
  );
}

export default Quotes;