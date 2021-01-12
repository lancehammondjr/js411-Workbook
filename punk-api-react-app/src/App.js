import React, { Component } from 'react';
import './App.css';

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      checked: false
    };
    
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beerName => this.setState({ beers: beerName}));
  }

  createCheckbox = () => (
    <label>
      <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange}/>
      <span>Like</span>
    </label>
  )


  render() {
    return(
      <div className="App">
      
      {
        this.state.beers.map(beer => (
          <p key={beer.id} > {this.createCheckbox} {beer.name} </p>
        ))
      }
    </div>
    );
  }
}

export default App;
