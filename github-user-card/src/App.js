import React from 'react';
import axios from "axios";
import './App.css';

import UserCard from "./components/UserCard"
import UserFollowers from "./components/UserFollowers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: {}
    }

  };


follow = (fol) => { 
  this.setState((this.user: Object.entries(this.state.followers))
}


  


  componentDidMount() {
    axios.get('https://api.github.com/users/lizdoyle')
      .then((res) => {
        this.setState({user: res.data});
      console.log("CDM in App.js:", this.state);
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    axios.get('https://api.github.com/users/lizdoyle/followers')
      .then((res) => {
        this.setState({ followers: res.data });
        console.log("CDU in App.js:", this.state);
        
      })
      .catch(err => console.log(err))
  }




  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <UserFollowers follow={this.follow} />
      </div>
    );
  }
}

export default App;
