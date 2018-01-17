import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IL.D. HomePage</h1>
        </header>
        <p className="App-intro">
          안녕하세요, IL.D. 홍보 test페이지 입니다.
        </p>
      </div>
    );
  }
}

export default App;
