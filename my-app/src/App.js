import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends React.Component  {

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ddelfaus')
      .then(res => {console.log(res)
      
        this.setState({  
        });
      })
      .catch(err => console.log(err));
  }


  render () {
  return (
    <div className="App">
     <h1>React Github User Cards</h1>
    </div>
  );
}
}

export default App;
