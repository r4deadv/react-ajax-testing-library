import React from "react";
import "./QuoteCard.css";

function QuoteCard({ quote, character, image }) {
  return (
    <div>
      <figure className="QuoteCard">
        <img src={image} alt={character} />
        <figcaption>
          <blockquote>{quote}</blockquote>
          <cite>{character}</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default QuoteCard;
