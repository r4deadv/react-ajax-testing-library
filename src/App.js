import React from "react";
import QuoteCard from "./components/QuoteCard";
import Loader from "./components/Loader";
import Axios from "axios";
import "./App.css";
import { useState } from "react";
const quote = {
  quote: "Shut up, brain. I got friends now. I don't need you anymore.",
  character: "Lisa Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
  characterDirection: "Right",
};

function App() {
  const [quoteCard, setQuoteCard] = useState(quote);
  const [isLoading, setIsLoading] = useState(false);

  const getQuote = (event) => {
    event.preventDefault();
    setIsLoading(() => true);

    const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
    Axios.get(url)
      .then((result) => result.data)
      .then((data) => {
        setIsLoading(() => false);
        setQuoteCard(() => data[0]);
      });
  };

  return (
    <div className="App">
      <button onClick={getQuote}>Get quoteCard</button>
      {isLoading ? <Loader /> : <QuoteCard {...quoteCard} />}
    </div>
  );
}

export default App;
