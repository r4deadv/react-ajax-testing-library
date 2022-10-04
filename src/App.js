import React from 'react';
import QuoteCard from './components/QuoteCard';
import Loader from './components/Loader';
import Axios from 'axios';
import './App.css'
const quote = { "quote": "Shut up, brain. I got friends now. I don't need you anymore.", "character": "Lisa Simpson", "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083", "characterDirection": "Right" };


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteCard: quote,
      isLoading: false

    }
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote(event) {
    event.preventDefault();
    this.setState({
      isLoading: true

    })
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    Axios.get(url)
      .then(result => result.data)
      .then(data => {
        this.setState({
          quoteCard: data[0],
          isLoading: false
        })
      })
  }

  render() {
    const quoteCard = this.state.quoteCard;
    return (
      <div className="App" >
        <button onClick={this.getQuote}>Get quoteCard</button>
        {(this.state.isLoading) ? <Loader /> : <QuoteCard {...quoteCard} />}

      </div>
    );
  }
}

