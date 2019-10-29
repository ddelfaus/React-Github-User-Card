import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import User from './Components/User'


class App extends React.Component  {
  constructor() {
    super();
  
  this.state = {
    users:[]
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
  }


  render () {
  return (
    <div className="App">
     <h1>React Github User Cards</h1>
     <User users = {this.state.users} />
    
    </div>
  );
}
}

export default App;
