import React, { Component } from 'react';
import { ContactList } from "./components/contact-list/contact-list.component";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userlist: [],
      loading: false
    };
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(res => res.json())
      .then(res => {this.setState({ 
        userlist: res.results,
        loading: true
      })
      });

    render(){
      return (
        <div className="App">

        <ContactList userlist={this.state.userlist}/>
        </div>
      );
    };
  }
}

export default App;
