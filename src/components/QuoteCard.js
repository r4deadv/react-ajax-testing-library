import React from 'react';
import './QuoteCard.css';

export default class QuoteCard extends React.Component {

    render() {
        const { quote, character, image } = this.props;
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
        )
    }

}

