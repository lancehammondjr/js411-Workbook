import React, { Component } from 'react';
import { ContactList } from "./components/contact-list/contact-list.component";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userlist: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(res => res.json())
      .then(data => this.setState({ 
        userlist: data.results
      }))
      .catch(error => console.log(`Error: ${error}`))
  }

  render(){
    return (
      <div className="App">
      <h1>Contact List</h1>
      <ContactList userlist={this.state.userlist}/>
    
      </div>
    );
  }
}

export default App;
