import React, {Component} from 'react';
import UserList from'./UserList'
import './App.css';
class App extends Component {
  render() {
    return(
    <div className="App">
      <h1>Users List </h1>
      <UserList/>
    </div>
  );
}}

export default App;
