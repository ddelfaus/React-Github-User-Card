import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import User from './Components/User'
import Followers from './Components/Followers'

class App extends React.Component  {
  constructor() {
    super();
  
  this.state = {
    users:[],
    followers:[]
  }

  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ddelfaus')
      .then(res => {
      
        this.setState({  
          users: res.data
        
        });
      
      })
      .catch(err => console.log(err));

      axios
      .get('https://api.github.com/users/ddelfaus/followers')
      .then(res => {
          console.log(res)
        this.setState({  
          followers: res.data
          
        });
      
      })
      .catch(err => console.log(err));
  }


  render () {
  return (
    <div className="App">
     <h1>React Github User Cards</h1>
     <User users = {this.state.users} />
    <Followers followers = {this.state.followers} />
    </div>
  );
}
}

export default App;
