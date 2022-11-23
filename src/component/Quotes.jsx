import { Component } from "react";
import quotesArray from "./QuotesBase";


class RandomQuotes extends Component{

  constructor(){
      super()
      this.state= {
          quote: quotesArray[0].quote,
          author: quotesArray[0].author,
      };
  }
  
  componentDidMount = () => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * quotesArray.length);  
      this.setState({
          quote: quotesArray[randomNumber].quote,
          author: quotesArray[randomNumber].author
      });
    }, 3000);
  }

  render(){
    const { quote, author } = this.state
    return(
      <div className="mx-auto text-center mt-5 px-4">
        <sup><i class="fa fa-quote-left" /></sup> {quote} <sup><i class="fa fa-quote-right" /></sup><br />
        <em>- {author}</em>
      </div>
    ) 
  }
}

export default RandomQuotes;